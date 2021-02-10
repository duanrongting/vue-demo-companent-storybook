import DrtForm from '../'
import DrtFormItem from '../../formitem'
import DrtInput from '../../input'
import DrtButton from '../../button'

export default {
    title: 'DrtForm',
    component: DrtForm
}

export const Login = () => ({
    components: { DrtForm, DrtFormItem, DrtInput, DrtButton },
    template: `
        <drt-form class="form" ref="form" :model="user" :rules="rules">
            <drt-form-item label="用户名" prop="username">
                <!-- <drt-input v-model="user.username"></drt-input> -->
                <drt-input :value="user.username" @input="user.username=$event" placeholder="请输入名字"></drt-input>
            </drt-form-item>
            <drt-form-item label="密码" prop="password">
                <drt-input type="password" v-model="user.password"></drt-input>
            </drt-form-item>
            <drt-form-item>
                <drt-button type="primary" @click="login">登 录6</drt-button>
            </drt-form-item>
        </drt-form>
    `,
    data() {
        return {
            user: {
                username: '',
                password: ''
            },
            rules: {
                username: [{
                    required: true,
                    message: '请输入用户名'
                }],
                password: [{
                        required: true,
                        message: '请输入密码'
                    },
                    {
                        min: 6,
                        max: 12,
                        message: '请输入6-12位密码'
                    }
                ]
            }
        }
    },
    methods: {
        login() {
            console.log('button')
            this.$refs.form.validate(valid => {
                if(valid){
                    alert('验证成功')
                } else {
                    alert('验证失败')
                    return false
                }
            })
        }
    }
})