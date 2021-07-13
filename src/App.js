import {useState, useEffect} from 'react';
import {Table} from 'antd';
import 'antd/dist/antd.css';
import './App.css';


function App() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllData();
    }, []);

    const getAllData = () => {
        fetch('https://breakingbadapi.com/api/characters')
            .then(response => response.json())
            .then((json) => setData(json))
            .then((loading) => setLoading(false))
            .catch((error) => console.log(error))
    };

    const columns = [

        {
            key: "key", title: 'char_id', dataIndex: 'key',
            sorter: (a, b) => a.name.length - b.name.length, sortDirections: ['descend']
        },
        {
            key: "name", title: 'Name', dataIndex: 'name',
            sorter: (a, b) => a.name.length - b.name.length, sortDirections: ['descend']
        },
        {
            key: "birthday", title: 'birthday', dataIndex: 'birthday',
            sorter: (a, b) => a.name.length - b.name.length, sortDirections: ['descend']
        },
        {
            key: "occupation", title: 'occupation', dataIndex: 'occupation',
            sorter: (a, b) => a.name.length - b.name.length, sortDirections: ['descend']
        },
        {
            key: "img", title: 'img', dataIndex: 'img',
            render: text => <img src={text} width="50px"></img>,
            sorter: (a, b) => a.name.length - b.name.length, sortDirections: ['descend']
        },
        {
            key: "status", title: 'status', dataIndex: 'status',
            sorter: (a, b) => a.name.length - b.name.length, sortDirections: ['descend']
        },
        {
            key: "nickname", title: 'nickname', dataIndex: 'nickname',
            sorter: (a, b) => a.name.length - b.name.length, sortDirections: ['descend']
        },
        {
            key: "appearance",
            title: 'appearance',
            dataIndex: 'appearance',
            sorter: (a, b) => a.name.length - b.name.length, sortDirections: ['descend']
        },
        {
            key: "portrayed",
            title: 'portrayed',
            dataIndex: 'portrayed',
            sorter: (a, b) => a.name.length - b.name.length, sortDirections: ['descend']
        },
        {
            key: "category",
            title: 'category',
            dataIndex: 'category',
            sorter: (a, b) => a.name.length - b.name.length, sortDirections: ['descend']
        },
        {
            key: "better_call_saul_appearance",
            title: 'better_call_saul_appearance',
            dataIndex: 'better_call_saul_appearance',
            sorter: (a, b) => a.name.length - b.name.length, sortDirections: ['descend']
        }
    ];

    const dataSource = data.map(row => (
        {
            key: row.char_id,
            name: row.name,
            birthday: row.birthday,
            occupation: row.occupation,
            img: row.img,
            status: row.status,
            nickname: row.nickname,
            appearance: row.appearance,
            portrayed: row.portrayed,
            category: row.category,
            better_call_saul_appearance: row.better_call_saul_appearance
        }
    ));

    if(data) {
        return (
            <div className="content">
                {
                    loading && <div>Loading</div>
                }
                {
                    !loading &&
                    <Table dataSource={dataSource} columns={columns} pagination={{pageSize: 5}}/>
                }
            </div>
        )
    } else {
        return (
            <div className="content">
                <p>No Data to Display</p>
            </div>
        )
    }
}

export default App;
