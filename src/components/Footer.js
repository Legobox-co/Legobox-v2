import React from "react"
import { Instagram, Facebook, Twitter} from "react-feather"

export default () => 
<footer>
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-3 col-sm-12 d-flex flex-row">
                <ul className="flex-row d-flex justify-content-space-between list-style-none">
                    <li className="mx-3 text-primary">
                        <Instagram/>
                    </li>
                    <li className="mx-3 text-primary">
                        <Facebook/>
                    </li>
                    <li className="mx-3 text-primary">
                        <Twitter/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>