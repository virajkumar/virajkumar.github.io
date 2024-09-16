import { AnyAction } from "redux";
import { Bar, Bars, BAR_ORDER_TYPE } from "../../../store/BarOrderReducer.ts";
import { ResetFlag } from "../../../store/ResetFlagReducer.ts";
import { RESET_FLAG_TYPE } from "../../../store/ResetFlagReducer.ts";

const insertionSort = async (
    currBars: Bars,
    callDispatch: (action: AnyAction) => void,
    resetFlag: ResetFlag | null
) => {
    let i = 1;
    currBars.flagShuffle = false;
    while (i < 48) {
        let key = { ...currBars.bars[i] };
        currBars.bars[i].backgroundColor = "red";
        setTimeout(() => {
            callDispatch({
                type: BAR_ORDER_TYPE,
                payload: { ...currBars },
            });
        }, 20);
        await new Promise((resolve) => setTimeout(resolve, 20));

        let j = i - 1;
        let temp: Bar;
        while (
            j >= 0 &&
            parseInt(
                currBars.bars[j].height.substring(0, currBars.bars[j].height.length - 2)
            ) > parseInt(key.height.substring(0, key.height.length - 2))
        ) {
            if (resetFlag) {
                if (resetFlag.flag === true) {
                    break;
                }
            }
            temp = currBars.bars[j + 1];
            currBars.bars[j + 1] = { ...currBars.bars[j] };
            currBars.bars[j] = temp;
            setTimeout(() => {
                callDispatch({
                    type: BAR_ORDER_TYPE,
                    payload: { ...currBars },
                });
            }, 20);
            await new Promise((resolve) => setTimeout(resolve, 20));
            j = j - 1;
        }
        currBars.bars[j + 1] = key;
        currBars.bars[j + 1].backgroundColor = "blue";
        setTimeout(() => {
            callDispatch({
                type: BAR_ORDER_TYPE,
                payload: { ...currBars },
            });
        }, 20);
        await new Promise((resolve) => setTimeout(resolve, 20));

        if (resetFlag) {
            if (resetFlag.flag === true) {
                resetFlag.flag = false;
                callDispatch({
                    type: RESET_FLAG_TYPE,
                    payload: { ...resetFlag },
                });
                break;
            }
        }
        i += 1;
    }
};

const auxMergeSort = async (
    currBars: Bars,
    p: number,
    q: number,
    r: number,
    callDispatch: (action: AnyAction) => void,
    resetFlag: ResetFlag | null
) => {
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

    while (i < nL && j < nR) {
        if (resetFlag?.flag === true) {
            return;
        }
        if (
            parseInt(L[i].height.substring(0, L[i].height.length - 2)) <=
            parseInt(R[j].height.substring(0, R[j].height.length - 2))
        ) {
            currBars.bars[k] = L[i];
            i = i + 1;
        } else {
            currBars.bars[k] = R[j];
            j = j + 1;
        }

        currBars.bars[k].backgroundColor = "red";;
        setTimeout(() => {
            callDispatch({
                type: BAR_ORDER_TYPE,
                payload: { ...currBars },
            });
        }, 20);
        await new Promise((resolve) => setTimeout(resolve, 20));

        currBars.bars[k].backgroundColor = "blue";
        setTimeout(() => {
            callDispatch({
                type: BAR_ORDER_TYPE,
                payload: { ...currBars },
            });
        }, 20);
        await new Promise((resolve) => setTimeout(resolve, 20));
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
                payload: { ...currBars },
            });
        }, 20);
        await new Promise((resolve) => setTimeout(resolve, 20));
        i = i + 1;
        currBars.bars[k].backgroundColor = "blue";
        setTimeout(() => {
            callDispatch({
                type: BAR_ORDER_TYPE,
                payload: { ...currBars },
            });
        }, 20);
        await new Promise((resolve) => setTimeout(resolve, 20));
        k = k + 1;
    }
    while (j < nR) {
        currBars.bars[k] = R[j];
        currBars.bars[k].backgroundColor = "red";
        setTimeout(() => {
            callDispatch({
                type: BAR_ORDER_TYPE,
                payload: { ...currBars },
            });
        }, 20);
        await new Promise((resolve) => setTimeout(resolve, 20));
        j = j + 1;
        currBars.bars[k].backgroundColor = "blue";
        setTimeout(() => {
            callDispatch({
                type: BAR_ORDER_TYPE,
                payload: { ...currBars },
            });
        }, 20);
        await new Promise((resolve) => setTimeout(resolve, 20));
        k = k + 1;
    }
};

const mainMergeSort = async (
    currBars: Bars,
    p: number,
    r: number,
    callDispatch: (action: AnyAction) => void,
    resetFlag: ResetFlag | null
) => {
    if (resetFlag?.flag === true) {
        return;
    }
    if (p >= r) {
        return;
    }
    const q = Math.floor((p + r) / 2);
    await mainMergeSort({ ...currBars }, p, q, callDispatch, resetFlag);
    await mainMergeSort({ ...currBars }, q + 1, r, callDispatch, resetFlag);

    await auxMergeSort({ ...currBars }, p, q, r, callDispatch, resetFlag);
};

const mergeSort = async (
    currBars: Bars,
    callDispatch: (action: AnyAction) => void,
    resetFlag: ResetFlag | null
) => {
    mainMergeSort(
        { ...currBars },
        0,
        currBars.bars.length - 1,
        callDispatch,
        resetFlag
    );
    if (resetFlag?.flag === true) {
        resetFlag.flag = false;
        callDispatch({
            type: RESET_FLAG_TYPE,
            payload: { ...resetFlag },
        });
        return;
    }
};

const maxHeapify = async (
    currBars: Bars,
    i: number,
    heapSize: number,
    callDispatch: (action: AnyAction) => void,
    resetFlag: ResetFlag | null
) => {
    let l: number = 2 * i + 1;
    let r: number = 2 * i + 2;
    let largest: number = 0;
    let temp: Bar;

    if (resetFlag) {
        if (resetFlag.flag === true) {
            callDispatch({
                type: RESET_FLAG_TYPE,
                payload: { ...resetFlag },
            });
            return;
        }
    }

    if (l <= heapSize - 1) {
        if (
            parseInt(
                currBars.bars[l].height.substring(0, currBars.bars[l].height.length - 2)
            ) >
            parseInt(
                currBars.bars[i].height.substring(0, currBars.bars[i].height.length - 2)
            )
        ) {
            largest = l;
        } else {
            largest = i;

            currBars.bars[i].backgroundColor = "red";
            setTimeout(() => {
                callDispatch({
                    type: BAR_ORDER_TYPE,
                    payload: { ...currBars },
                });
            }, 20);
            await new Promise((resolve) => setTimeout(resolve, 20));
        }
    } else {
        largest = i;

        currBars.bars[i].backgroundColor = "red";
        setTimeout(() => {
            callDispatch({
                type: BAR_ORDER_TYPE,
                payload: { ...currBars }
            });
        }, 20);
        await new Promise((resolve) => setTimeout(resolve, 20));
    }

    if (r <= heapSize - 1) {
        if (
            parseInt(
                currBars.bars[r].height.substring(0, currBars.bars[r].height.length - 2)
            ) >
            parseInt(
                currBars.bars[largest].height.substring(
                    0,
                    currBars.bars[largest].height.length - 2
                )
            )
        ) {
            largest = r;
        }
    }

    if (largest !== i) {
        temp = currBars.bars[i];
        currBars.bars[i] = currBars.bars[largest];
        currBars.bars[largest] = temp;

        currBars.bars[largest].backgroundColor = "blue";
        setTimeout(() => {
            callDispatch({
                type: BAR_ORDER_TYPE,
                payload: { ...currBars },
            });
        }, 20);
        await new Promise((resolve) => setTimeout(resolve, 20));

        await maxHeapify(currBars, largest, heapSize, callDispatch, resetFlag);
    }
    currBars.bars[i].backgroundColor = "blue";
    setTimeout(() => {
        callDispatch({
            type: BAR_ORDER_TYPE,
            payload: { ...currBars },
        });
    }, 20);
};

const buildMaxHeap = async (
    currBars: Bars,
    n: number,
    callDispatch: (action: AnyAction) => void,
    resetFlag: ResetFlag | null
) => {
    let heapSize = n;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await maxHeapify(currBars, i, heapSize, callDispatch, resetFlag);
    }
};

const heapSort = async (currBars: Bars, callDispatch: (action: AnyAction) => void, resetFlag: ResetFlag | null) => {
    await buildMaxHeap(currBars, currBars.bars.length, callDispatch, resetFlag);
    let temp: Bar;
    let heapSize: number = currBars.bars.length;
    for (let i = currBars.bars.length - 1; i >= 1; i--) {
        temp = currBars.bars[0];
        currBars.bars[0] = currBars.bars[i];
        currBars.bars[i] = temp;
        heapSize -= 1;
        await maxHeapify(currBars, 0, heapSize, callDispatch, resetFlag);
    }
    if (resetFlag) {
        if (resetFlag.flag == true) {
            resetFlag.flag = false;
            callDispatch({
                type: RESET_FLAG_TYPE,
                payload: { ...resetFlag },
            });
        }
    }
    callDispatch({
        type: BAR_ORDER_TYPE,
        payload: { ...currBars },
    });
};

const partitionQuickSort = async (
    currBars: Bars,
    p: number,
    r: number,
    callDispatch: (action: AnyAction) => void,
    resetFlag: ResetFlag | null
): Promise<number> => {
    let x: Bar = currBars.bars[r];
    let i: number = p - 1;
    let temp: Bar;

    x.backgroundColor = "green";
    setTimeout(() => {
        callDispatch({
            type: BAR_ORDER_TYPE,
            payload: { ...currBars },
        });
    }, 20);
    await new Promise((resolve) => setTimeout(resolve, 20));

    for (let j = p; j <= r - 1; j++) {
        if (resetFlag) {
            if (resetFlag.flag === true) {
                callDispatch({
                    type: RESET_FLAG_TYPE,
                    payload: { ...resetFlag },
                });
                return await new Promise((resolve) => {
                    resolve(0);
                });
            }
        }
        currBars.bars[j].backgroundColor = "red";
        setTimeout(() => {
            callDispatch({
                type: BAR_ORDER_TYPE,
                payload: { ...currBars },
            });
        }, 20);
        await new Promise((resolve) => setTimeout(resolve, 20));

        if (i === -1) {
            currBars.bars[0].backgroundColor = "red";
            setTimeout(() => {
                callDispatch({
                    type: BAR_ORDER_TYPE,
                    payload: { ...currBars },
                });
            }, 20);
            await new Promise((resolve) => setTimeout(resolve, 20));
        } else {
            currBars.bars[i].backgroundColor = "red";
            setTimeout(() => {
                callDispatch({
                    type: BAR_ORDER_TYPE,
                    payload: { ...currBars },
                });
            }, 20);
            await new Promise((resolve) => setTimeout(resolve, 20));
        }

        if (
            parseInt(
                currBars.bars[j].height.substring(0, currBars.bars[j].height.length - 2)
            ) <= parseInt(x.height.substring(0, x.height.length - 2))
        ) {
            i += 1;
            temp = currBars.bars[i];
            currBars.bars[i] = currBars.bars[j];
            currBars.bars[j] = temp;
            if (i === 0) {
                currBars.bars[0].backgroundColor = "blue";
                setTimeout(() => {
                    callDispatch({
                        type: BAR_ORDER_TYPE,
                        payload: { ...currBars },
                    });
                }, 20);
                await new Promise((resolve) => setTimeout(resolve, 20));
                currBars.bars[1].backgroundColor = "blue";
                setTimeout(() => {
                    callDispatch({
                        type: BAR_ORDER_TYPE,
                        payload: { ...currBars },
                    });
                }, 20);
                await new Promise((resolve) => setTimeout(resolve, 20));
            } else {
                currBars.bars[i - 1].backgroundColor = "blue";
                setTimeout(() => {
                    callDispatch({
                        type: BAR_ORDER_TYPE,
                        payload: { ...currBars },
                    });
                }, 20);
                await new Promise((resolve) => setTimeout(resolve, 20));
                currBars.bars[i].backgroundColor = "blue";
                setTimeout(() => {
                    callDispatch({
                        type: BAR_ORDER_TYPE,
                        payload: { ...currBars },
                    });
                }, 20);
                await new Promise((resolve) => setTimeout(resolve, 20));
            }
            currBars.bars[j].backgroundColor = "blue";
            setTimeout(() => {
                callDispatch({
                    type: BAR_ORDER_TYPE,
                    payload: { ...currBars },
                });
            }, 20);
            await new Promise((resolve) => setTimeout(resolve, 20));
        }
        if (i >= 0) {
            currBars.bars[i].backgroundColor = "blue";
            setTimeout(() => {
                callDispatch({
                    type: BAR_ORDER_TYPE,
                    payload: { ...currBars },
                });
            }, 20);
            await new Promise((resolve) => setTimeout(resolve, 20));
        }
        currBars.bars[j].backgroundColor = "blue";
        setTimeout(() => {
            callDispatch({
                type: BAR_ORDER_TYPE,
                payload: { ...currBars },
            });
        }, 20);
        await new Promise((resolve) => setTimeout(resolve, 20));
    }
    temp = currBars.bars[i + 1];
    currBars.bars[i + 1] = currBars.bars[r];
    currBars.bars[r] = temp;

    currBars.bars[i + 1].backgroundColor = "blue";
    setTimeout(() => {
        callDispatch({
            type: BAR_ORDER_TYPE,
            payload: { ...currBars },
        });
    }, 20);
    await new Promise((resolve) => setTimeout(resolve, 20));

    currBars.bars[r].backgroundColor = "blue";
    setTimeout(() => {
        callDispatch({
            type: BAR_ORDER_TYPE,
            payload: { ...currBars },
        });
    }, 20);
    await new Promise((resolve) => setTimeout(resolve, 20));

    x.backgroundColor = "blue";
    setTimeout(() => {
        callDispatch({
            type: BAR_ORDER_TYPE,
            payload: { ...currBars },
        });
    }, 20);
    await new Promise((resolve) => setTimeout(resolve, 20));

    return await new Promise((resolve, reject) => {
        resolve(i + 1);
    });
};

const mainQuickSort = async (
    currBars: Bars,
    p: number,
    r: number,
    callDispatch: (action: AnyAction) => void,
    resetFlag: ResetFlag | null
) => {
    if (resetFlag) {
        if (resetFlag.flag === true) {
            callDispatch({
                type: RESET_FLAG_TYPE,
                payload: { ...resetFlag },
            });
            return;
        }
    }
    let q: number;
    if (p < r) {
        q = await partitionQuickSort(currBars, p, r, callDispatch, resetFlag);
        await mainQuickSort(currBars, p, q - 1, callDispatch, resetFlag);
        await mainQuickSort(currBars, q + 1, r, callDispatch, resetFlag);
    }
};

const quickSort = async (
    currBars: Bars,
    callDispatch: (action: AnyAction) => void,
    resetFlag: ResetFlag | null
) => {
    await mainQuickSort(
        currBars,
        0,
        currBars.bars.length - 1,
        callDispatch,
        resetFlag
    );
    callDispatch({
        type: BAR_ORDER_TYPE,
        payload: { ...currBars },
    });
    if (resetFlag) {
        if (resetFlag.flag === true) {
            resetFlag.flag = false;
            callDispatch({
                type: RESET_FLAG_TYPE,
                payload: { ...resetFlag },
            });
        }
    }
};

const sortingAlgos = (dsaItem: string | undefined, callDispatch: (action: AnyAction) => void, bars: Bars | null, resetFlag: ResetFlag | null) => {
    if (bars) {
        switch (dsaItem) {
            case "insertion-sort":
                insertionSort(bars, callDispatch, resetFlag);
                break;
            case "merge-sort":
                mergeSort({ ...bars }, callDispatch, resetFlag);
                break;
            case "heap-sort":
                heapSort(bars, callDispatch, resetFlag);
                break;
            case "quick-sort":
                quickSort(bars, callDispatch, resetFlag);
                break;
            default:
                console.log("error");
                break;
        }
    }
};

export default sortingAlgos;
