import React from "react";
import LoginButton from "./Login";

class MenuLogout extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark .navbar-nav">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">GRUPO SEVEN</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarDropdownnavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                        <form>
                            <LoginButton />
                        </form>
                    </div>
                </div>
            </nav >            

        );
    }
}

export default MenuLogout;