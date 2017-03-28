window.ee = new EventEmitter();

var my_news = [
    {
        author: 'Саша Печкин',
        text: 'В четверг, четвертого числа...',
        bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили' +
        ' чёрными чернилами чертёж.'

    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!',
        bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили' +
        ' чёрными чернилами чертёж.'
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт.',
        bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили' +
        ' чёрными чернилами чертёж.'
    }
];

var Article = React.createClass({
    getInitialState: function () {
        return {
            visible: false
        }
    },

    readmoreClick: function (e) {
        e.preventDefault();
        this.setState({visible: true});
    },

    render: function () {
        var author = this.props.data.author,
            text = this.props.data.text,
            bigText = this.props.data.bigText,
            visible = this.state.visible;

        return (
            <div className="article">
                <p className="news__author">{author}:</p>
                <p className="news__text">{text}</p>
                <a href="#"
                   onClick={this.readmoreClick}
                   className={'news__readmore ' + (visible ? 'none':'')}>
                    Подробнее
                </a>
                <p className={'news__big-text ' + (visible ? '':'none')}>
                    {bigText}
                </p>
            </div>
        )
    }
});

var News = React.createClass({
    render: function () {
        var data = this.props.data;
        var newsTemplate;
        if (data.length > 0) {
            newsTemplate = data.map(function (item, index) {
                return (
                    <div key={index}>
                        <Article data={item}/>
                    </div>
                )
            })
        } else {
            newsTemplate = <p>К сожалению новостей нет!</p>
        }
        return (
            <div className="news">
                {newsTemplate}
                <strong
                    className={data.length > 0 ? '':'none'}>
                    Всего {data.length} новости!
                </strong>
            </div>
        );
    }
});

var Add = React.createClass({
    getInitialState: function () {
        return {
            agreeNotChecked: true,
            authorIsEmpty: true,
            textIsEmpty: true
        };
    },
    componentDidMount: function () {
        ReactDOM.findDOMNode(this.refs.author).focus();
    },
    onBtnClickHandler: function (e) {
        e.preventDefault();
        var textEl = ReactDOM.findDOMNode(this.refs.text);
        var author = ReactDOM.findDOMNode(this.refs.author).value;
        var text = ReactDOM.findDOMNode(this.refs.text).value;

        var item = [{
            author: author,
            text: text,
            bigText: '...'
        }];
        window.ee.emit('News.add', item);
        textEl.value = '';
        this.setState({textIsEmpty: true});
    },
    onCheckRuleClick: function (e) {
        this.setState({agreeNotChecked: !this.state.agreeNotChecked});
    },
    onFieldChange: function (fieldName, e) {
        if (e.target.value.trim().length > 0) {
            this.setState({['' + fieldName]: false})
        } else {
            this.setState({['' + fieldName]: true})
        }
    },

    render: function () {
        var agreeNotChecked = this.state.agreeNotChecked,
            authorIsEmpty = this.state.authorIsEmpty,
            textIsEmpty = this.state.textIsEmpty;
        return (
            <form className='add cf'>
                <input
                    type='text'
                    className='add__author'
                    onChange={this.onFieldChange.bind(this, 'authorIsEmpty')}
                    placeholder='Ваше имя'
                    ref='author'
                />
                <textarea
                    className='add__text'
                    onChange={this.onFieldChange.bind(this, 'textIsEmpty')}
                    placeholder='Текст новости'
                    ref='text'>
                </textarea>
                <label className='add__checkrule'>
                    <input type='checkbox' ref='checkrule' onChange={this.onCheckRuleClick}/>Я с
                    огласен с правилами
                </label>
                <button
                    className='add__btn'
                    onClick={this.onBtnClickHandler}
                    ref='alert_button'
                    disabled={agreeNotChecked || authorIsEmpty || textIsEmpty}
                >
                    |Добавить новость|
                </button>
            </form>
        );
    }
});

var App = React.createClass({
    getInitialState: function () {
        return {
            news: my_news
        };
    },

    componentDidMount: function () {
        var self = this;
        window.ee.addListener('News.add', function (item) {
            var nextNews = item.concat(self.state.news);
            self.setState({news: nextNews});
        });
    },

    componentWillUnmount: function () {
        window.ee.removeListener('News.add');
    },

    render: function () {
        console.log('render');
        return (
            <div className='app'>
                <Add />
                <h3>Новости</h3>
                <News data={this.state.news}/>
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);