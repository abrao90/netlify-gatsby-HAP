import NetlifyForm from 'react-netlify-form'
import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

const EnquiryForm = (props) => {
    return (
        <Layout>
        <Helmet>
            <title>Vets offering services in area name, city</title>
            <meta name="description" content="Generic Page" />
        </Helmet>
        <div id="main">
        <section id="one">
            <NetlifyForm name='Contact Form'>
            {({ loading, error, success }) => (
                <div>
                {loading &&
                    <div>Loading...</div>
                }
                {error &&
                    <div>Your information was not sent. Please try again later.</div>
                }
                {success &&
                    <div>Thank you for contacting us!</div>
                }
                {!loading && !success &&
                    <div>
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="contact" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="contact" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="contact" />
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                    <input type='text' name='Name' placeholder="Name" required />
                    <textarea name='Message' placeholder="Note..." required />
                    <button>Submit</button>
                    </div>
                }
                </div>
            )}
            </NetlifyForm>
        </section>
        </div>
        </Layout>
    )
}

export default EnquiryForm
