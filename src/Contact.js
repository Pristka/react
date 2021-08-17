import React from 'react'
import Register from './Register'

class Contact extends React.Component {
    render() {
        return <><h2>Contact</h2>
            <div className="Contact">
                <div>
                    <h3>You can find us at Šturova 27, 040 01,Košice
                    </h3>
                </div>

                <div className="mapD" >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.398449715702!2d21.248262015669408!3d48.71697767927399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ee1d5a0aeb7d1%3A0xbc599d739383e66e!2sAccenture!5e0!3m2!1ssk!2ssk!4v1628155218365!5m2!1ssk!2ssk" width="600" height="450"></iframe>
                </div>
                <br></br>
                <div className="regD"><Register></Register></div>
            </div>
        </>
    }
}
export default Contact