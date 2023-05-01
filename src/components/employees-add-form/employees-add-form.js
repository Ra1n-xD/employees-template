import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            errors: {
                name: '',
                salary: ''
            }
        };
    }

    onValueChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
            errors: {
                ...this.state.errors,
                [name]: ''
            }
        });
    };

    onSubmit = (e) => {
        e.preventDefault();

        const { name, salary } = this.state;

        const errors = {};
        if (name.length < 5) {
            errors.name = 'Минимальное кол-во символов 5';
        }

        if (!salary.trim()) {
            errors.salary = 'Введите зарплату';
        }

        if (Object.keys(errors).length > 0) {
            this.setState({ errors });
            return;
        }

        this.props.onAdd(name, salary);
        this.setState({
            name: '',
            salary: '',
            errors: {
                name: '',
                salary: ''
            }
        });
    };

    render() {
        const { name, salary, errors } = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Как его зовут?</label>
                        <input type="text" className={`form-control ${errors.name ? 'is-invalid' : ''}`} id="name" name="name" value={name} onChange={this.onValueChange} />
                        {errors.name && <label className="invalid-feedback">{errors.name}</label>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="salary">З/П в $?</label>
                        <input type="number" className={`form-control ${errors.salary ? 'is-invalid' : ''}`} id="salary" name="salary" value={salary} onChange={this.onValueChange} />
                        {errors.salary && <label className="invalid-feedback">{errors.salary}</label>}
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-outline-light">
                            Добавить
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;
