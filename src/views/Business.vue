<template>
  <div class="business-wrap">
    <h1 class="title">[学护卡]业务办理</h1>
    <div class="class-info-wrap">
      <p class="tips">请确认您的班级信息</p>
      <ul class="class-info">
        <li>
          <div class="label-text">所在学校：</div>
          <div class="info-content">河南宏途第一实验学校</div>
        </li>
        <li>
          <div class="label-text">所在班级：</div>
          <div class="info-content">一年级1班</div>
        </li>
      </ul>
    </div>
    <div class="line"></div>
    <div class="phone-info-wrap">
      <p class="tips">请认真完整填写以下信息，我们将统一为您办理</p>
      <div class="sub-title">开通手机号</div>
      <div class="phone-form-box">
        <div class="form-item required">
          <div class="item-label">开通业务手机号：</div>
          <div class="item-content">
            <input type="number">
          </div>
        </div>
        <div class="form-item required">
          <div class="item-label">验证码：</div>
          <div class="item-content">
            <input type="number" placeholder="填写6位验证码">
          </div>
        </div>
      </div>
      <div class="get-phonecode">
        <span class="send-msg-tips">使用开通业务手机号（限河南移动），编辑短信3496 发送到10086，将获得的验证码。</span>
        <span class="sendmsg-btn">发送短信</span>
      </div>
      <div class="fee-box">
        <div class="fee-content">
          <div class="label-text">业务资费：</div>
          <div class="info-content">5元/月，按天收费</div>
        </div>
        <div class="fee-tips">在开通业务的手机号码中扣取</div>
      </div>
    </div>
    <div class="line"></div>
    <div class="student-info-wrap">
      <div class="sub-title">学生信息</div>
      <div class="phone-form-box">
        <div class="form-item required">
          <div class="item-label">姓名：</div>
          <div class="item-content">
            <input type="text">
          </div>
        </div>
      </div>
      <div class="relphone-tips">亲情号码（学生持卡可免费拨打电话）</div>
      <div class="relphone-box">
        <div class="item-box required">
          <div class="label">第一联系人：</div>
          <div class="phone">
            <input type="number">
          </div>
          <div class="relation">
            <select class="select-rel">
              <option value="">爸爸</option>
              <option value="">妈妈</option>
            </select>
          </div>
        </div>
        <div class="item-box required">
          <div class="label">第二联系人：</div>
          <div class="phone">
            <input type="number">
          </div>
          <div class="relation">
            <select class="select-rel">
              <option value="">爸爸</option>
              <option value="">妈妈</option>
            </select>
          </div>
        </div>
        <div class="item-box">
          <div class="label">第二联系人：</div>
          <div class="phone">
            <input type="number">
          </div>
          <div class="relation">
            <select class="select-rel">
              <option value="">爸爸</option>
              <option value="">妈妈</option>
            </select>
          </div>
        </div>
      </div>
      <div class="open-more">
        <span class="more-btn">填写更多联系人</span>
      </div>
    </div>
    <div class="bottom-wrap">
      <div class="operate-box">
        <button class="open-btn">立即开通</button>
      </div>
      <div class="agree-tips">
        同意<a href="javascript:;">《学护卡用户协议》</a>
      </div>
      <p class="help-tips">
				点击立即开通并同意《学护卡用户协议》表示您已清楚所申请业务服务内容，接受以上资费标准，自愿开通该业务
				<br/>
				<br/>
				如有问题请拨打客服电话400-6099-019或10086
				<br/>
				<br/>
				业务退订：手机发送0000到10086
			</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'business'
}
</script>


<style lang="scss" scoped>
@import "@/assets/scss/base.scss";
 .business-wrap{
   background-color: #fff;
   .line{
     width: 100%;
     height: 1px;
     background-color: #dcdcdc;
   }
   .title{
     font-size: px2half(36px);
     color: #3f3f3f;
     padding: px2half(60px) px2half(40px);
     font-weight: bold;
   }
   .class-info-wrap{
     padding: 0 px2half(40px);
     .tips{
       font-size: px2half(25px);
       color: #8a9199;
       margin-bottom: px2half(40px);
     }
     .class-info{
       li{
         display: flex;
         justify-content: space-between;
         align-items: center;
         margin-bottom: px2half(60px);
         font-size: px2half(30px);
         .label-text{
           color: #3f3f3f;
         }
         .info-content{
           color: #000;
           font-weight: 700;
         }
       }
     }
   }
   .phone-info-wrap{
     padding: 0 px2half(40px);
     .tips{
       font-size: px2half(25px);
       color: #8a9199;
       margin: px2half(40px) 0;
     }
     .sub-title{
       color: #3f3f3f;
       font-size: px2half(28px);
       margin-bottom: px2half(40px);
       font-weight: 700;
     }
     .phone-form-box{
       .form-item{
         display: flex;
         justify-content: space-between;
         align-items: center;
         margin-bottom: px2half(50px);
         .item-label{
           color: #3f3f3f;
           font-size: px2half(30px);
           position: relative;
         }
         .item-content{
           width: 50%;
           input{
             border:1px solid #dcdcdc;
             height: px2half(60px);
             width: 100%;
             padding-left: px2half(5px);
             font-size: px2half(25px);
           }
         }
         &.required{
           .item-label::after{
             position: absolute;
             top:px2half(8px);
             right: px2half(-10px);
             content: '*';
             color: #ff6666;
           }
         }
         &:last-child{
           margin-bottom: px2half(20px);
         }
       }
     }
   }
   .get-phonecode{
     margin-bottom: px2half(50px);
     line-height: px2half(42px);
     .send-msg-tips{
       color: #ffb000;
       font-size: px2half(25px);
     }
     .sendmsg-btn{
       display: inline-block;
       border-radius: 10px;
       background-color: #47aefe;
       color: #fff;
       padding: 4px 10px;
       line-height: 1;
     }
   }
   .fee-box{
     margin-bottom: px2half(50px);
     .fee-content{
       color: #3f3f3f;
       display: flex;
       justify-content: space-between;
       align-items: center;
       font-size: px2half(30px);
       .label-text{
       }
       .info-content{
         color: #3f3f3f;
       }
     }
     .fee-tips{
       text-align: right;
       color: #8a9199;
       font-size: 13px;
       margin-top: 10px;
     }
   }
   .student-info-wrap{
     padding: 0 px2half(40px);
    //  display: none;
     .sub-title{
       color: #3f3f3f;
       font-size: px2half(28px);
       margin: px2half(40px) 0;
       font-weight: 700;
     }
     .phone-form-box{
       .form-item{
         display: flex;
         justify-content: space-between;
         align-items: center;
         margin-bottom: px2half(50px);
         .item-label{
           color: #3f3f3f;
           font-size: px2half(30px);
           position: relative;
         }
         .item-content{
           width: 50%;
           input{
             border:1px solid #dcdcdc;
             height: px2half(60px);
             width: 100%;
             padding-left: px2half(5px);
             font-size: px2half(25px);
           }
         }
         &.required{
           .item-label::after{
             position: absolute;
             top:px2half(8px);
             right: px2half(-10px);
             content: '*';
             color: #ff6666;
           }
         }
         &:last-child{
           margin-bottom: px2half(20px);
         }
       }
     }
     .relphone-tips{
       font-size: px2half(25px);
       color: #8a9199;
       margin-top: px2half(40px);
       margin-bottom: px2half(40px);
     }
     .relphone-box{
       padding-bottom: 10px;
       .item-box{
         display: flex;
         justify-content: space-between;
         align-items: center;
         margin-bottom: px2half(40px);
         .label{
           position: relative;
           width: px2half(200px);
           color: #3f3f3f;
           font-size: px2half(30px);
         }
         .phone{
           width: px2half(238px);
           input{
             border:1px solid #dcdcdc;
             height: px2half(60px);
             width: 100%;
             padding-left: px2half(5px);
             font-size: px2half(25px);
           }
         }
         .relation{
           width: px2half(197px);
           select{
             border:1px solid #dcdcdc;
             height: px2half(60px);
             width: 100%;
             background-color: #fff;
             outline: none;
           }
         }
         &.required{
           .label::after{
             position: absolute;
             top:px2half(8px);
             right: px2half(10px);
             content: '*';
             color: #ff6666;
           }
         }
       }
     }
     .open-more{
      text-align: right;
      position: relative;
      top:-0.5rem;
      padding-right: 0.333333rem;
      .more-btn{
        font-size: 0.333333rem;
        color: #8a9199;
        position: relative;
        &::after{
          position: absolute;
          right: -0.333333rem;
          top:0.036667rem;
          content: '';
          width: 0.2rem;
          height: 0.2rem;
          border:0.026667rem solid #8a9199;
          border-top: none;
          border-right: none;
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }
      }
     }
   }
   .bottom-wrap{
     background-color: #efeff4;
     padding-top: 22px;
     .operate-box{
       text-align: center;
       .open-btn{
          width: px2half(666px);
          height: px2half(92px);
          color: #fff;
          font-size: 17px;
          letter-spacing: 0.026667rem;
          border-radius: 0.613333rem;
          text-align: center;
          background-color: #47aefe;
          margin-bottom: 0.266667rem;
          border: none;
       }
     }
     .help-tips{
       text-align: center;
       padding: 0.613333rem 0.8rem 0.346667rem;
       line-height: 0.5rem;
       color: #8a9199;
       font-size: px2half(25px);
     }
   }
 }
</style>
