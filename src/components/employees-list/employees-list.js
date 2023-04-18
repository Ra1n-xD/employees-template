import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data, onDelete }) => {
    const elements = data.map((item) => {
        const { id, ...itemList } = item;

        return <EmployeesListItem key={id} {...itemList} onDelete={() => onDelete(id)} />;
    });

    return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
