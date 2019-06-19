import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Form from '../components/Form/Form'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Generic</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                </div>
                <div className="inner">
                <Form />
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic