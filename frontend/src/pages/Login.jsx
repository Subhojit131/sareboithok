import {Row, Col, Space, Typography, Button, Checkbox, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";


const onLogin = async(e) => {
    e.preventDefault();

    const login = {email, password};
    const res = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(login),
    }, {withCredentials: true});

    console.log(res);

    if (res.status === 200) {
        window.alert("Login Successful")
        console.log("Login Successful")
    } else {
        window.alert("Login Unsuccessful")
        console.log("Login Unsuccessful")
    }
}


const Login = () => {
    return (
        <Form
            method="POST"
            name="normal-login"
            className="login-form"
            initialValues={{remember: true}}
        >

            <Form.Item
                name="email"
                rules={[
                    {
                        type: "email",
                        message: "This input is not valid E-mail!",
                    },
                    {
                        required: true,
                        message: "Please input your email!",
                    }
                ]}>
                <Input
                    prefix={<UserOutlined className="site-form-item-icon"/>}
                    placeholder="Email"
                    type="text"
                    name="email"
                />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: "Please input your password"
                    },
                ]}
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    type="password"
                    placeholder="Password"
                    name="password"
                />
            </Form.Item>

            <Form.Item className="flex ">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox style={{color: "white"}}>Remember me</Checkbox>
                </Form.Item>
            </Form.Item>

            <Form.Item>
                <Button
                    onClick={onLogin}
                    type="primary"
                    block
                    className="mb-3 text-black bg-white"
                >
                    Submit
                </Button>
                <span style={{color: "white"}}>Or</span> &nbsp;
                <a href="/signup" className="text-blue-500 underline">
                    Register now!
                </a>
            </Form.Item>
        </Form>
    )
}

export default Login