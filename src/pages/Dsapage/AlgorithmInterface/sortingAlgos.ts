import { AnyAction } from "redux";
import { Bar, Bars, BAR_ORDER_TYPE } from "../../../store/BarOrderReducer.ts";
import { ResetFlag } from "../../../store/ResetFlagReducer.ts";
import { RESET_FLAG_TYPE } from "../../../store/ResetFlagReducer.ts";

const insertionSort = async (currBars: Bars, callDispatch: (action: AnyAction) => void, resetFlag: ResetFlag | null) => {
    let i = 1;
    currBars.flagShuffle = false;
    while (i < 48) {
        let key = { ...currBars.bars[i] };
        currBars.bars[i].backgroundColor = "red";
        setTimeout(() => {
            callDispatch({
                type: BAR_ORDER_TYPE,
                payload: { ...currBars }
            });
        }, 20);
        await new Promise(resolve => setTimeout(resolve, 20));
        
        let j = i - 1;
        let temp: Bar;
        while (j >= 0 && parseInt(currBars.bars[j].height.substring(0, currBars.bars[j].height.length - 2)) > parseInt(key.height.substring(0, key.height.length - 2))) {
            if (resetFlag) {
                if (resetFlag.flag === true) {
                    break;
                }
            }
            temp = currBars.bars[j + 1];
            currBars.bars[j + 1] = { ...currBars.bars[j]};
            currBars.bars[j] = temp;
            setTimeout(() => {
                callDispatch({
                    type: BAR_ORDER_TYPE,
                    payload: { ...currBars }
                });
            }, 20);
            await new Promise(resolve => setTimeout(resolve, 20));
            j = j - 1;
        }
        currBars.bars[j + 1] = key;
        currBars.bars[j + 1].backgroundColor = "blue";
        setTimeout(() => {
            callDispatch({
                type: BAR_ORDER_TYPE,
                payload: { ...currBars }
            });
        }, 20);
        await new Promise(resolve => setTimeout(resolve, 20));

        if (resetFlag) {
            if (resetFlag.flag === true) {
                resetFlag.flag = false;
                callDispatch({
                    type: RESET_FLAG_TYPE,
                    payload: { ...resetFlag }
                });
                break;
            }
        }
        i += 1;
    }
}

const mergeSort = (bars: Bars, callDispatch: (action: AnyAction) => void, resetFlag: ResetFlag | null) => {

}

const heapSort = (bars: Bars, callDispatch: (action: AnyAction) => void, resetFlag: ResetFlag | null) => {

}

const quickSort = (bars: Bars, callDispatch: (action: AnyAction) => void, resetFlag: ResetFlag | null) => {

}

const sortingAlgos = (dsaItem: string | undefined, callDispatch: (action: AnyAction) => void, bars: Bars | null, resetFlag: ResetFlag | null) => {
    if (bars) {
        switch(dsaItem) {
            case 'insertion-sort':
                insertionSort(bars, callDispatch, resetFlag);
                break;
            case 'merge-sort':
                mergeSort(bars, callDispatch, resetFlag);
                break;
            case 'heap-sort':
                heapSort(bars, callDispatch, resetFlag);
                break;
            case 'quick-sort':
                quickSort(bars, callDispatch, resetFlag);
                break;
            default:
                console.log("error");
                break;
        }
    }
}

export default sortingAlgos;