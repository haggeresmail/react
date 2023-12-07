import React from 'react';
import {Conatcttitle,ContactSection,Span,Form,FormInput,InputText,InputEmail,InputExp,Inputsubmit,TextArea} from './style.js'
import Footer from '../Footer/index.js';

const Contact = ()=>{
  
  return (
    <React.Fragment>
    <ContactSection>
            <div class="container">
                <Conatcttitle><Span>Drop </Span>Me A line</Conatcttitle>
                <Form>
                    <FormInput>
                        <InputText type="text" placeholder="Your Name"/>
                        <InputEmail type="email" placeholder="Your Email"/>
                    </FormInput>
                    <InputExp type="text" class="sub" placeholder="Your Subject"/>
                    <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                    <Inputsubmit type="submit" value="Send Message"/>
                </Form>
            </div>
        </ContactSection>
        <Footer />
        </React.Fragment>
  );

}
export default Contact;
