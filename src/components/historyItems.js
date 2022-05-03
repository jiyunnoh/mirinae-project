import styled from "styled-components";

const ItemsList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 3rem 0 10rem;
`;

const Item = styled.li`
    color: rgb(135, 135, 135);

    &:hover {
        color: rgb(157, 205, 202);
    }
`;

const data = [
    { text: '나는 자전거를 탈 수 있습니다.', enText: 'I can ride bicycle.', date: 'Tue, 29 Sep 2020 01:18:17' },
    { text: '나는 자전거를 고칠 수 있습니다.', enText: 'I can fix bicycle.', date: 'Sat, 26 Sep 2020 06:20:14' },
    { text: '나는 자전거를 살 수 있습니다.', enText: 'I can buy bicycle.', date: 'Thu, 24 Sep 2020 05:02:27' },
];

const HistoryItems = () => {
    return (
        <ItemsList>
            {data.map((item) => {
                return (
                    <Item key={item.date}>
                        <h4>{item.text}</h4>
                        <span>{item.enText}</span>
                        <span>{item.date}</span>
                        <hr />
                    </Item>
                );
            })}
        </ItemsList>
    );
};

export default HistoryItems;