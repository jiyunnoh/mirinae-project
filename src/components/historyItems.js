import styled from "styled-components";

const Item = styled.li`
&:hover {
    color: green;
}
`;

const data = [
    { text: '나는 자전거를 탈 수 있습니다.', enText: 'I can ride bicycle.', date: 'Tue, 29 Sep 2020 01:18:17' },
    { text: '나는 자전거를 고칠 수 있습니다.', enText: 'I can fix bicycle.', date: 'Sat, 26 Sep 2020 06:20:14' },
    { text: '나는 자전거를 살 수 있습니다.', enText: 'I can buy bicycle.', date: 'Thu, 24 Sep 2020 05:02:27' },
];

const HistoryItems = () => {
    return (
        <ul>
            {data.map((item) => {
                return (
                    <Item key={item.date}>
                        <h2>{item.text}</h2>
                        <span>{item.enText}</span>
                        <span>{item.date}</span>
                    </Item>
                );
            })}
        </ul>
    );
};

export default HistoryItems;