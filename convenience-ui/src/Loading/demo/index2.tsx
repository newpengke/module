import React from 'react';
import Loading from '..';
export default function LoadingDemo1() {
    return (
        <div style={{ position: 'relative', width: "600px", height: "200px" }}>
            <Loading mask="black" loading   text="拼命加载中..." type="all">
            </Loading>
        </div>
    );
}
