import React from 'react'
import {createForm, formShape} from 'rc-form';


class Form extends React.Component {
    static propTypes = {
        form: formShape,
    };

    componentWillMount() {
        //装饰器模式
        this.testDecorator = this.props.form.getFieldDecorator('test', {
            rules: [{required: true}], initialValue: ''
        });
    }

    constructor(props) {
        super(props);
    }

    handleChange(e) {

    }

    submit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((error, value) => {
            if(error){
                let a = {...error}
                console.log("错误信息:",a)
            }else {
                console.log(value);
            }

        });
    };


    render() {
        let errors;
        const {getFieldError, getFieldProps, getFieldDecorator} = this.props.form;
        return (
            <div>
                <form>
                    {this.testDecorator(
                        <input/>
                    )}
                    <br/>
                    <input {...getFieldProps('name', {initialValue: ''})}/><br/>
                    <input {...getFieldProps('age', {
                        onChange(e) {
                            console.log(e.target.value)
                        }, rules: [{required: true}], initialValue: ''
                    })}/>
                    {(errors = getFieldError('required', {initialValue: ''})) ? errors.join(',') : null}
                    <button onClick={this.submit}>submit</button>
                </form>
                <hr/>

            </div>
        );
    }
}

export default createForm()(Form);
