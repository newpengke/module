import React, { useState } from 'react';
import TreeStyle from '..';
import { AccountBookOutlined, RocketOutlined, SolutionOutlined, AimOutlined, StarOutlined, HeartOutlined, AppstoreAddOutlined, BugOutlined, FileWordOutlined, CiCircleOutlined, CarOutlined, ContainerOutlined, ExperimentOutlined, FireOutlined } from '@ant-design/icons';
export default function TreeDemo1() {
    const data = [
        {
            id: 1,
            name: "one",
            icon: <AccountBookOutlined style={{ marginRight: "10px" }} />,
            children: [
                {
                    id: 1 - 1,
                    name: '1-1',
                    icon: <AimOutlined style={{ marginRight: "10px" }} />,
                    children: [
                        {
                            id: 1 - 1 - 1,
                            name: '1-1-1',
                            icon: <AppstoreAddOutlined style={{ marginRight: "10px" }} />,
                        },
                    ]
                },
            ]
        },
        {
            id: 2,
            name: "two",
            icon: <BugOutlined style={{ marginRight: "10px" }} />,
            children: [
                {
                    id: 2 - 1,
                    name: '2-1',
                    icon: <CiCircleOutlined style={{ marginRight: "10px" }} />,
                    children: [
                        {
                            id: 2 - 1 - 1,
                            name: '2-1-1',
                            icon: <CarOutlined style={{ marginRight: "10px" }} />,
                        },
                    ]
                },
                {
                    id: 2 - 2,
                    name: '2-2',
                    icon: <ContainerOutlined style={{ marginRight: "10px" }} />,
                    children: [
                        {
                            id: 2 - 2 - 1,
                            name: '2-2-1',
                            icon: <ExperimentOutlined style={{ marginRight: "10px" }} />,
                        },
                    ]
                },
            ]
        }, {
            id: 3,
            name: "Three",
            icon: <FireOutlined style={{ marginRight: "10px" }} />,
            children: [
                {
                    id: 3 - 1,
                    name: '3-1',
                    icon: <FileWordOutlined style={{ marginRight: "10px" }} />,
                    children: [
                        {
                            id: 3 - 1 - 1,
                            name: '3-1-1',
                            icon: <HeartOutlined style={{ marginRight: "10px" }} />,
                        },
                    ]
                },
                {
                    id: 3 - 2,
                    name: '3-2',
                    icon: <HeartOutlined style={{ marginRight: "10px" }} />,
                    children: [
                        {
                            id: 3 - 2 - 1,
                            name: '3-2-1',
                            icon: <RocketOutlined style={{ marginRight: "10px" }} />
                        },
                    ]
                },
                {
                    id: 3 - 3,
                    name: '3-3',
                    icon: <StarOutlined style={{ marginRight: "10px" }} />,
                    children: [
                        {
                            id: 3 - 3 - 1,
                            name: '3-3-1',
                            icon: <SolutionOutlined style={{ marginRight: "10px" }} />
                        },
                    ]
                },

            ]
        }
    ]
    return (
        <div >
            <TreeStyle data={data}></TreeStyle>
        </div>
    );
}
