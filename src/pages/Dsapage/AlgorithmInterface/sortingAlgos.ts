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

const auxMergeSort = async (currBars: Bars, p: number, q: number, r: number, callDispatch: (action: AnyAction) => void, resetFlag: ResetFlag | null) => {
    const nL: number = q - p + 1;
    const nR: number = r - q;
    const L: Bar[] = Array(nL);
    const R: Bar[] = Array(nR);

    for (const i of Array(nL).keys()) {
        if (resetFlag?.flag === true) {
            return;
        }
        L[i] = currBars.bars[p + i];
    }

    for (const j of Array(nR).keys()) {
        R[j] = currBars.bars[q + j + 1];
    }

    let i: number = 0;
    let j: number = 0;
    let k: number = p;

    while (i < nL && j <nR) {
        if (resetFlag?.flag === true) {
            return;
        }
        if (parseInt(L[i].height.substring(0, L[i].height.length - 2)) <= parseInt(R[j].height.substring(0, R[j].height.length - 2))) {
            currBars.bars[k] = L[i];
            i = i + 1;
        } else {
            currBars.bars[k] = R[j];
            j = j + 1;
        }

        currBars.bars[k].backgroundColor = "red";
        setTimeout(() => {
            callDispatch({
                type: BAR_ORDER_TYPE,
                payload: { ...currBars }
            });
        }, 20);
        await new Promise(resolve => setTimeout(resolve, 20));

        currBars.bars[k].backgroundColor = "blue";
        setTimeout(() => {
            callDispatch({
                type: BAR_ORDER_TYPE,
                payload: { ...currBars }
            });
        }, 20);
        await new Promise(resolve => setTimeout(resolve, 20));
        k = k + 1;
    }

    while (i < nL) {
        if (resetFlag?.flag === true) {
            return;
        }
        currBars.bars[k] = L[i];
        currBars.bars[k].backgroundColor = "red";
        setTimeout(() => {
            callDispatch({
                type: BAR_ORDER_TYPE,
                payload: { ...currBars }
            });
        }, 20);
        await new Promise(resolve => setTimeout(resolve, 20));
        i = i + 1;
        currBars.bars[k].backgroundColor = "blue";
        setTimeout(() => {
            callDispatch({
                type: BAR_ORDER_TYPE,
                payload: { ...currBars }
            });
        }, 20);
        await new Promise(resolve => setTimeout(resolve, 20));
        k = k + 1;
    }
    while (j < nR) {
        currBars.bars[k] = R[j];
        currBars.bars[k].backgroundColor = "red";
        setTimeout(() => {
            callDispatch({
                type: BAR_ORDER_TYPE,
                payload: { ...currBars }
            });
        }, 20);
        await new Promise(resolve => setTimeout(resolve, 20));
        j = j + 1;
        currBars.bars[k].backgroundColor = "blue";
        setTimeout(() => {
            callDispatch({
                type: BAR_ORDER_TYPE,
                payload: { ...currBars }
            });
        }, 20);
        await new Promise(resolve => setTimeout(resolve, 20));
        k = k + 1;
    }
}

const mainMergeSort = async (currBars: Bars, p: number, r: number, callDispatch: (action: AnyAction) => void, resetFlag: ResetFlag | null) => {
    if (resetFlag?.flag === true) {
        return;
    }
    if (p >= r){
        return;
    }
    const q = Math.floor((p+r)/2);
    await mainMergeSort({ ...currBars }, p, q, callDispatch, resetFlag);
    await mainMergeSort({ ...currBars }, q + 1, r, callDispatch, resetFlag);

    await auxMergeSort({ ...currBars }, p, q, r, callDispatch, resetFlag);
}

const mergeSort = async (currBars: Bars, callDispatch: (action: AnyAction) => void, resetFlag: ResetFlag | null) => {
    mainMergeSort({ ...currBars}, 0, currBars.bars.length - 1, callDispatch, resetFlag);
    if(resetFlag?.flag === true) {
        resetFlag.flag = false;
        callDispatch({
            type: RESET_FLAG_TYPE,
            payload: { ...resetFlag }
            });
        return;
    }
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
                mergeSort({ ...bars}, callDispatch, resetFlag);
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