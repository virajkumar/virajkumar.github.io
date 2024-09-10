import { AnyAction } from "redux";
import { Bar, Bars, BAR_ORDER_TYPE } from "../../../store/BarOrderReducer.ts";

const insertionSort = async (currBars: Bars, callDispatch: (action: AnyAction) => void) => {
    let i = 1;
    let newCurrBars: Bars;
    currBars.flagShuffle = false;
    while (i < 48) {
        let key = currBars.bars[i];
        console.log(i);
        currBars.bars[i].backgroundColor = "red";
        newCurrBars = { ...currBars };

        callDispatch({
            type: BAR_ORDER_TYPE,
            payload: newCurrBars
        });

        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(i*2);
        let j = i - 1;
        while (j > 0 && currBars.bars[j].height > key.height) {
            currBars.bars[j + 1] = currBars.bars[j];
            currBars.bars[j + 1].backgroundColor = "red";
            currBars.bars[j].backgroundColor = "blue";
            newCurrBars = { ...currBars };
            callDispatch({
                type: BAR_ORDER_TYPE,
                payload: newCurrBars
            });
            await new Promise(resolve => setTimeout(resolve, 1000));
            j = j - 1;
        }
        currBars.bars[j + 1] = key;
        currBars.bars[j + 1].backgroundColor = "blue";
        i += 1
    }
}

const mergeSort = (bars: Bars, callDispatch: (action: AnyAction) => void) => {

}

const heapSort = (bars: Bars, callDispatch: (action: AnyAction) => void) => {

}

const quickSort = (bars: Bars, callDispatch: (action: AnyAction) => void) => {

}

const sortingAlgos = (dsaItem: string | undefined, callDispatch: (action: AnyAction) => void, bars: Bars | null) => {
    if (bars) {
        switch(dsaItem) {
            case 'insertion-sort':
                insertionSort(bars, callDispatch);
                break;
            case 'merge-sort':
                mergeSort(bars, callDispatch);
                break;
            case 'heap-sort':
                heapSort(bars, callDispatch);
                break;
            case 'quick-sort':
                quickSort(bars, callDispatch);
                break;
            default:
                console.log("error");
                break;
        }
    }
}

export default sortingAlgos;