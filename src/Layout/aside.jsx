import React from 'react'
import { Menu } from '../menu';
import { Link } from 'react-router-dom';


const Aside = () => {
    return (
        // Left Panel
        <aside id="left-panel" className="left-panel">
            <nav className="navbar navbar-expand-sm navbar-default">
                <div id="main-menu" className="main-menu collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        {
                            Menu.map((menu, index) => (
                                menu.fixMenu ? (
                                    <React.Fragment key = {index}>
                                        <li className="active">
                                            <Link to={menu.path}  >
                                                <i className="menu-icon fa fa-laptop"></i>{menu.name}
                                            </Link>
                                        </li>
                                        <li  className="menu-title">Menu</li>
                                    </React.Fragment>
                                ) : (
                                        <React.Fragment key = {index}>
                                            <li className="menu-item-has-children dropdown">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="menu-icon fa fa-cogs"></i>{menu.name}</a>
                                                <ul className="sub-menu children dropdown-menu">
                                                    {
                                                        menu.childrens.map((child, cIndex) => (
                                                            <li key={cIndex}><i className={menu.icon}></i>
                                                                <Link to={child.path} >{child.name}</Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>

                                            </li>
                                        </React.Fragment>
                                    )


                            ))
                        }
                    </ul>

                </div>
            </nav>
        </aside >
    );
}

export default Aside;