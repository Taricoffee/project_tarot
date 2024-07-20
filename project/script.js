const cards = [
    { image: 'images/card1.png', description: '0号愚人' },
    { image: 'images/card2.png', description: '1号魔法师' },
    { image: 'images/card3.png', description: '2号女祭司' },
    { image: 'images/card4.png', description: '3号女皇' },
    { image: 'images/card5.png', description: '4号皇上' },
    { image: 'images/card6.png', description: '5号教皇' },
    { image: 'images/card7.png', description: '7号战车' },
    { image: 'images/card8.png', description: '这是一张示例塔罗牌8' },
    { image: 'images/card9.png', description: '这是一张示例塔罗牌9' },
    { image: 'images/card10.png', description: '这是一张示例塔罗牌10' },
    { image: 'images/card11.png', description: '这是一张示例塔罗牌11' },
    { image: 'images/card12.png', description: '这是一张示例塔罗牌12' },
    { image: 'images/card13.png', description: '这是一张示例塔罗牌13' },
    { image: 'images/card14.png', description: '这是一张示例塔罗牌14' },
    { image: 'images/card15.png', description: '这是一张示例塔罗牌15' },
    { image: 'images/card16.png', description: '这是一张示例塔罗牌16' },
    { image: 'images/card17.png', description: '这是一张示例塔罗牌17' },
    { image: 'images/card18.png', description: '这是一张示例塔罗牌18' },
    { image: 'images/card19.png', description: '这是一张示例塔罗牌19' },
    { image: 'images/card20.png', description: '这是一张示例塔罗牌20' },
    { image: 'images/card21.png', description: '这是一张示例塔罗牌21' },
    { image: 'images/card22.png', description: '这是一张示例塔罗牌22' },
];

function drawCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const selectedCard = cards[randomIndex];

    document.getElementById('cardImage').src = selectedCard.image;
    document.getElementById('cardDescription').textContent = selectedCard.description;
}

document.getElementById('drawCardButton').addEventListener('click', drawCard);

// 每天自动抽卡
window.onload = () => {
    const now = new Date();
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
    const cardIndex = dayOfYear % cards.length;

    const selectedCard = cards[cardIndex];
    document.getElementById('cardImage').src = selectedCard.image;
    document.getElementById('cardDescription').textContent = selectedCard.description;
};