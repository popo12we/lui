<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>
      <button @click="submitForm('ruleForm')">提交</button>
    </el-form>
  </div>
</template>

 
<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password:""
        
      },
      rules: {
        username: [
          { required: true, message: "请输入活动名称" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符"}
        ],
          password: [
          { required: true, message: "请输入活动名称" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符"}
        ],
     
      }
    };
  },
  methods: {
    submitForm(formName) {
     
      this.$refs[formName].validate(valid => {
      
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>
