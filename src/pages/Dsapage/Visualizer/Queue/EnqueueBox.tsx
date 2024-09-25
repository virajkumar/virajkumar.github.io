import React, { FC } from 'react';
import "./EnqueueBox.css"
import { useSelector } from 'react-redux';
import { AppState } from '../../../../store/AppState';

const EnqueueBox: FC = () => {
    const enqueueBox = useSelector((state: AppState) => state.enqueueBox);

    if (enqueueBox) {
        if (enqueueBox.empty === false) {
            return (
                <div id="enqueuebox-container">
                    {enqueueBox.value}
                </div>
            );
        } else {
            return (
                <div id="enqueuebox-container">
                </div>
            )
        }
    }
}

export default EnqueueBox;