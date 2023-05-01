import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Максим', salary: 10000, increase: false, like: false, id: 1 },
                { name: 'Кирилл', salary: 100, increase: false, like: false, id: 2 },
                { name: 'Артем', salary: 100, increase: false, like: false, id: 3 }
            ]
        };
        this.nextId = 4;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter((item) => item.id !== id)
            };
        });
    };

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            like: false,
            id: this.nextId++
        };

        this.setState(({ data }) => {
            return {
                data: [...data, newItem]
            };
        });
    };

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map((item) => {
                if (item.id === id) return { ...item, [prop]: !item[prop] };

                return item;
            })
        }));
    };

    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter((item) => item.increase).length;

        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased} />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList data={this.state.data} onDelete={this.deleteItem} onToggleProp={this.onToggleProp} />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;
