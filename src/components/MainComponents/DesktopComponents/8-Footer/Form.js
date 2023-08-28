import { Formik, Form } from 'formik';
import {
  CheckboxContainer,
  Wrapper,
  Checkbox,
  Label,
  InputContainer,
  Input,
  ButtonSubmit,
} from './Form.styled';
// const CustomTextarea = (props) => <textarea rows="3" {...props}></textarea>;
const FormFeedback = () => (
  <div>
    <Formik
      initialValues={{
        Name: '',
        Phone: '',
        email: '',
        services: [],
        details: '',
      }}
      // onSubmit={async (values) => {
      //   await new Promise((r) => setTimeout(r, 500));
      //   alert(JSON.stringify(values, null, 2));
      //   //   console.log(JSON.stringify(values, null, 2));
      // }}
      onSubmit={(values, onSubmitProps) => {
        //   await new Promise((r) => setTimeout(r, 500));
        //   alert(JSON.stringify(values, null, 2));
        console.log(values);
        onSubmitProps.resetForm();
        alert(`Dear ${values.Name} we are callback you!`);
      }}
    >
      <Form>
        <div id="checkbox-group">
          <h3>Services</h3>
        </div>

        <CheckboxContainer role="group" aria-labelledby="checkbox-group">
          <Wrapper>
            <Checkbox
              id="Marketing"
              type="checkbox"
              name="services"
              value="Marketing"
            />
            <Label htmlFor="Marketing"> Marketing</Label>
          </Wrapper>
          <Wrapper>
            <Checkbox
              id="Promotion"
              type="checkbox"
              name="services"
              value="Promotion"
            />
            <Label htmlFor="Promotion">Promotion</Label>
          </Wrapper>
          <Wrapper>
            <Checkbox
              id="Social"
              type="checkbox"
              name="services"
              value="Social media"
            />
            <Label htmlFor="Social">Social media</Label>
          </Wrapper>
          <Wrapper>
            <Checkbox
              id="Development"
              type="checkbox"
              name="services"
              value="Development"
            />
            <Label htmlFor="Development">Development</Label>
          </Wrapper>
          <Wrapper>
            <Checkbox
              id="Branding"
              type="checkbox"
              name="services"
              value="Branding"
            />
            <Label htmlFor="Branding">Branding</Label>
          </Wrapper>
          <Wrapper>
            <Checkbox
              id="Other"
              type="checkbox"
              name="services"
              value="Other"
            />
            <Label htmlFor="Other">Other</Label>
          </Wrapper>
        </CheckboxContainer>
        <InputContainer>
          <Input id="Name" name="Name" placeholder="Name*" />

          <Input id="Phone" name="Phone" placeholder="Phone" />

          <Input id="email" name="email" placeholder="Email*" type="email" />

          <Input
            id="details"
            name="details"
            placeholder="Project details"
            type="textarea"
            // as={CustomTextarea}
          />

          <ButtonSubmit type="submit">Send</ButtonSubmit>
        </InputContainer>
      </Form>
    </Formik>
  </div>
);

export default FormFeedback;
