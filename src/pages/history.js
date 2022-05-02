import React, { useContext } from "react";
import UserContext from "../store/user-context";

const data = [
    { text: '나는 자전거를 탈 수 있습니다.', enText: 'I can ride bicycle.', date: 'Tue, 29 Sep 2020 01:18:17' },
    { text: '나는 자전거를 고칠 수 있습니다.', enText: 'I can fix bicycle.', date: 'Sat, 26 Sep 2020 06:20:14' },
    { text: '나는 자전거를 살 수 있습니다.', enText: 'I can buy bicycle.', date: 'Thu, 24 Sep 2020 05:02:27' },
];

const History = () => {
    const userCtx = useContext(UserContext);
    return (
        <>
            <h1>Exploration history</h1>
            <h2>{userCtx.name}</h2>
            <ul>
                {data.map((item) => {
                    return (
                        <React.Fragment key={item.date}>
                            <li>
                                <h2>{item.text}</h2>
                                <span>{item.enText}</span>
                                <span>{item.date}</span>
                            </li>
                        </React.Fragment>
                    );
                })}
            </ul>
        </>
    );
};

export default History;