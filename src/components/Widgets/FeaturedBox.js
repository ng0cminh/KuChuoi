/* eslint-disable @next/next/no-img-element */
import {Component} from "react";

class FeaturedBox extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            posts: []
        }
    }

    render () {
        return (
            <div className="widget">
                <h3 className="widget-title">Most views</h3>
                <div className="widget-content">
                    <ul className="widget-post">
   
                        <li className="item-post">
                        <a href="#">
                            <img src="/images/contents/blog/article-5.jpg" alt="anh 1" />
                        </a>
                        <h4>
                            <a href="/single.html">Tiêu đề viết cho phần sidebar dài khoảng hai dòng hoặc hơn</a>
                        </h4>
                        </li>
     
                    </ul>
                </div>
            </div>
        )
    }
}

export default FeaturedBox;
