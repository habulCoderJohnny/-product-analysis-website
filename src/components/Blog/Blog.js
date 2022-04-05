import React from 'react';
import './blog.css';

const Blog = () => {
    return (
        <div className='blog-area'>
            <div className="quesition-one">
                <h3>1. What is Context API?</h3>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around.This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.Context is also touted as an easier, lighter approach to state management using Redux.Sometimes people use shared state across nested components instead of just passing it as props. </p>
            </div>
            <div className="quesition-two">
            <h3>2. What is semantic tag?</h3>
                <p> Semantic tag or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a 'p' tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.</p>
            </div>
            <div className="quesition-three">
                <h3>3. Blog and inline-blog element.</h3>
                <p>There were two basic categories of HTML elements. 1.Block Element 2.Inline elements. </p>
                <p><strong>Block Elements: </strong>Block level elements take up as much space as possible by default. Each block level element will start a new line on the page, stacking down the page. In addition to stacking vertically, block level elements will also take up as much horizontal space as possible.</p>
                <p><strong>Inline-Block Elements: </strong>Inline elements display in a line. They do not force the text after them to a new line.</p>
            </div>
        </div>
    );
};

export default Blog;