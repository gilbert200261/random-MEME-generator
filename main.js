var generateMeme = document.querySelector('.generateMeme')
var titleval = document.querySelector('.title')
var authorval = document.querySelector('.author')
var memeImg = document.querySelector('.memeImg')

const updateData = (url, title, author) => {
    memeImg.setAttribute('src', url)
    titleval.innerHTML = title
    authorval.innerHTML = author
}

const getMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
        .then(res => res.json()
            .then(data => {
                updateData(data.url, data.title, data.author)
            }         
            ))
}
generateMeme.addEventListener('click', getMeme)

let funnyCount = 35;
    let notFunnyCount = 65;

    function vote(type) {
        if (type === 'funny') {
            funnyCount++;
            document.getElementById('funnyCount').textContent = funnyCount;
        } else if (type === 'notFunny') {
            notFunnyCount++;
            document.getElementById('notFunnyCount').textContent = notFunnyCount;
        }
        updatePieChart();
    }

    function updatePieChart() {
        const totalVotes = funnyCount + notFunnyCount;

        const funnyPercentage = (funnyCount / totalVotes) * 100;
        const notFunnyPercentage = (notFunnyCount / totalVotes) * 100;

        const pieData = {
            labels: ['Funny', 'Not Funny'],
            datasets: [{
                data: [funnyPercentage, notFunnyPercentage],
                backgroundColor: ['#36A2EB', '#FF6384'],
            }],
        };

        const pieChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
        };

        const pieChart = new Chart(document.getElementById('pieChart'), {
            type: 'pie',
            data: pieData,
            options: pieChartOptions,
        });
    }
    updatePieChart();

