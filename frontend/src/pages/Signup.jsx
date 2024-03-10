import {Row, Col, Space, Typography, Button, Checkbox, Form, Input} from "antd";
import {LockOutlined, UserOutlined, MailOutlined} from "@ant-design/icons";
import {redirect} from "react-router-dom";
const onRegister = async (e) => {
    e.preventDefault()

    const {username, email, password, confirmpassword} = register

    const res = await fetch('http://localhost:3001/signup', {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            username, email, password, confirmpassword
        })
    })

    const data = res.json()
    console.log(res)

    if(data.status === 422 || !data) {
        window.alert("Registration Unsuccessful")
        console.log("Registration Unsuccessful")
    } else {
        window.alert("Registration Successful")
        console.log("Registration Successful");

        redirect('/login');
    }
}


const Signup = () => {
    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{remember: true}}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true, message: "Please input your Username!"
                    },
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon"/>}
                    placeholder="Username"
                    type="text"
                    name="username"
                />
            </Form.Item>

            <Form.Item
                name="email"
                rules={[
                    {
                        type: "email",
                        message: "Invalid email!",
                    },
                    {
                        required: true,
                        message: "Please input your email!",
                    }
                ]}
            >

                <Input prefix={<MailOutlined/>}
                       placeholder="E-mail"
                       type="text"
                       name="email"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {required: true,
                        message: "Please input your password"},
                ]}
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    type="password"
                    placeholder="Password"
                    name="password"
                />
            </Form.Item>

            <Form.Item
                name="confirm"
                dependencies={["password"]}
                rules={[
                    {
                        required: true,
                        message: "Please confirm your password!"
                    },
                    ({getFieldValue}) => ({
                        validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(
                                new Error(
                                    "The two passwords that you entered do not match!"
                                )
                            );
                        },
                    }),
                ]}
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmpassword"
                />
            </Form.Item>

            <Form.Item className="flex ">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox style={{color: "white"}}>Remember me</Checkbox>
                </Form.Item>

                <a
                    className="ml-[88px] login-form-forgot"
                    href=""
                    style={{color: "white",marginLeft:"100px"}}
                >
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button
                    onClick={onRegister}
                    type="primary"
                    block
                    className="mb-5 text-black bg-white"
                    style={{ marginLeft: '0px',backgroundColor:"red"}}
                >
                    Submit
                </Button>
                <span style={{color:"white",marginLeft:"150px"}}>Or</span>
                <br />
                <a href="/login" className="mt-3 text-blue-500 underline" style={{marginLeft:"25px",color:"red"}}>
                    Already have an account, login to continue!
                    
                </a>
            </Form.Item>
        </Form>
    )
}

export default Signup

