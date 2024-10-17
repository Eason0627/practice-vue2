<template>
  <div class="container-fuild indexBox">
    <div class="row mr-0">
      <div class="welcome-left-container col-12 col-xl-3">
        <div class="shadow-sm mb-3 pb-3 border user">
          <div class="d-flex justify-content-between w-100 userInfo">
            <div class="text">
              <p class="m-0">{{ nickname }}</p>
              <p class="m-0 py-2 username">
                <span>账号ID：</span>{{ username }}
              </p>
              <span
                :class="
                  this.$store.state.level === `超级管理员`
                    ? `mt-1 bg-danger text-light userState`
                    : `mt-1 bg-secondary text-light userState`
                "
                >{{ this.$store.state.level }}</span
              >
            </div>
            <img :src="userImg" class="rounded-circle userImg" alt="" />
          </div>
          <div
            :class="
              now_day_article.length > 0
                ? 'col-8 mx-auto text-center text-light bg-success rounded-sm tips'
                : 'col-8 mx-auto text-center text-light bg-warning rounded-sm tips'
            "
          >
            {{
              now_day_article.length > 0
                ? `今日已发布${now_day_article.length}篇文章，再接再厉！`
                : `今日未发布文章，快去写一篇吧！`
            }}
          </div>
        </div>
        <div class="row shadow-sm border total">
          <div class="col-4">
            <div class="visitTol">
              <p class="text-center font-weight-bold">总访客数</p>
              <p class="text-center text-primary">999+</p>
            </div>
          </div>
          <div class="col-4">
            <div class="artTol">
              <p class="text-center font-weight-bold">总文章数</p>
              <p class="text-center text-info">{{ artTotal || 0 }}</p>
            </div>
          </div>
          <div class="col-4">
            <div class="commentTol">
              <p class="text-center font-weight-bold">总评论数</p>
              <p class="text-center text-success">{{ comTotal || 0 }}</p>
            </div>
          </div>
        </div>
        <div class="row shadow-sm border mt-3 p-3 newMsg">
          <p class="w-100">最新消息</p>
          <ul>
            <li class="mt-3">
              <div class="clearfix d-flex justify-content-between userMsg">
                <div class="userImg">
                  <img :src="userImg" class="rounded-circle" alt="" />
                </div>
                <div class="msgBox">
                  <div class="msgInfo">
                    <span class="username">栖灵</span>
                    评论于
                    <span class="msgTime">2022-5-14 20:57</span>
                  </div>
                  <div class="msgText">锟斤拷烫烫烫烫锟斤拷烫烫烫烫</div>
                </div>
              </div>
            </li>
            <li class="mt-3">
              <div class="clearfix d-flex justify-content-between userMsg">
                <div class="userImg">
                  <img :src="userImg" class="rounded-circle" alt="" />
                </div>
                <div class="msgBox">
                  <div class="msgInfo">
                    <span class="username">栖灵</span>
                    评论于
                    <span class="msgTime">2022-5-14 20:57</span>
                  </div>
                  <div class="msgText">锟斤拷烫烫烫烫锟斤拷烫烫烫烫</div>
                </div>
              </div>
            </li>
            <li class="mt-3">
              <div class="clearfix d-flex justify-content-between userMsg">
                <div class="userImg">
                  <img :src="userImg" class="rounded-circle" alt="" />
                </div>
                <div class="msgBox">
                  <div class="msgInfo">
                    <span class="username">栖灵</span>
                    评论于
                    <span class="msgTime">2022-5-14 20:57</span>
                  </div>
                  <div class="msgText">锟斤拷烫烫烫烫锟斤拷烫烫烫烫</div>
                </div>
              </div>
            </li>
            <li class="mt-3">
              <div class="clearfix d-flex justify-content-between userMsg">
                <div class="userImg">
                  <img :src="userImg" class="rounded-circle" alt="" />
                </div>
                <div class="msgBox">
                  <div class="msgInfo">
                    <span class="username">栖灵</span>
                    评论于
                    <span class="msgTime">2022-5-14 20:57</span>
                  </div>
                  <div class="msgText">锟斤拷烫烫烫烫锟斤拷烫烫烫烫</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="welcome-right-container col-12 col-xl-9">
        <div class="data-show">
          <ul class="clearfix">
            <li class="col-sm-12 col-lg-4 float-left data-item">
              <a href="javascript:;" class="shadow-sm clearfix">
                <div
                  class="
                    rounded-circle
                    text-center
                    bg-primary
                    float-left
                    icon-bg
                  "
                >
                  <svg
                    t="1652405977174"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="1898"
                    width="200"
                    height="200"
                  >
                    <path
                      d="M1019.714 883.738C974.853 765.603 899.021 737.96 837.871 727.024c-50.958-9.121-114.55-28.108-137.005-40.487-0.744-10.215-1.07-31.063 0.908-64.942 1.303-1.443 2.49-2.606 3.792-4.119l-0.674-0.605c30.11-40.394 44.536-78.345 51.027-103.987 19.5-13.728 39.952-40.51 51.959-92.213 6.957-29.946 12.146-67.874-9.354-94.982-0.489-0.675-1-1.303-1.536-1.908C816.255 133.794 694.491 37.904 623.08 12.891l-1.047-0.442-1.024-0.14C594.087 4.142 568.143 0 543.943 0c-5.7 0-10.959 0.256-16.148 0.652C522.513 0.326 517.185 0 511.717 0c-24.176 0-50.074 4.095-77.066 12.193l-0.954 0.325-1.023 0.35c-71.528 24.92-193.315 120.903-173.979 310.89-0.558 0.605-1.117 1.233-1.512 1.908-21.594 27.108-16.312 65.035-9.354 94.982 12.053 51.702 32.413 78.578 51.958 92.213 6.422 25.456 20.756 62.941 50.376 103.033 0 0 0.326 0.442 0.326 0.488 1.676 2.258 2.955 4.491 4.677 6.772 1.955 32.552 1.582 52.796 0.675 63.5-22.594 12.285-85.93 31.319-136.889 40.417C157.85 737.96 81.947 765.65 37.18 883.714c-7.609 20.08-4.84 41.93 7.446 59.754C90.487 1010.038 333.038 1024 528.33 1024c195.293 0 437.89-13.961 483.939-80.672 12.285-17.73 14.984-39.58 7.445-59.59zM341.717 477.679c-6.027 0-31.413-3.979-46.281-68.177-11.611-49.864 0.512-57.892 9.47-57.892 4.095 0 7.516 1.676 7.516 1.676C268.165 121.973 448.636 59.032 448.636 59.032c24.874-7.446 45.722-10.122 62.941-10.122 5.77 0 11.122 0.256 16.055 0.838 5.026-0.582 10.378-0.838 16.125-0.838 17.242 0 38.114 2.653 62.942 10.122 0 0 180.517 62.918 136.213 294.254 0 0 3.42-1.676 7.632-1.676 8.959 0 21.082 7.888 9.424 57.846-14.868 64.174-40.3 68.107-46.258 68.107-0.814 0-1.28-0.07-1.28-0.07s-3.187 60.149-58.566 125.068c0 0.489-0.093 1.117-0.093 1.606-43.07 43.93-87.094 65.175-131.188 63.5-54.82-2.281-98.193-39.674-119.693-62.36 0-0.35-0.093-0.815-0.093-1.164-56.496-65.43-59.824-126.604-59.824-126.604s-0.418 0.14-1.256 0.14zM528.33 975.043c-232.15 0-464.276-24.688-445.522-74.087 37.393-98.658 96.983-117.343 144.614-125.836 47.584-8.563 163.252-37.416 173.467-64.686 3.094-8.214 4.258-23.455 4.42-40.557 29.11 21.826 68.108 42.465 114.97 44.582 2.606 0.14 5.213 0.256 7.702 0.256 42.326 0 83.604-15.776 123.347-46.025 0.186 17.638 1.372 33.367 4.514 41.814 10.145 27.2 125.79 56.146 173.443 64.686s107.198 27.224 144.614 125.86c18.661 49.328-213.442 73.993-445.569 73.993z m0 0"
                      fill="#ffffff"
                      p-id="1899"
                    ></path>
                  </svg>
                </div>
                <div class="right-text">
                  <p>本周访客数</p>
                  <p>
                    <span class="text-primary">89</span>
                    数据
                    <span
                      ><svg
                        t="1652422517101"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="2553"
                        width="200"
                        height="200"
                      >
                        <path
                          d="M445.956283 138.81155L240.916794 493.900153c-11.329675 19.52757-12.066565 44.213367 0 65.122605 12.066565 20.909238 33.896915 32.607358 56.464154 32.607358h89.71629v275.043987c0 31.96258 25.975353 57.937933 57.937933 57.937933h134.021769c32.054691 0 57.937933-25.975353 57.937933-57.937933V591.630116h83.45273c24.685797 0 48.634704-12.803454 61.806602-35.739138 13.171899-22.843573 12.342898-50.016371 0-71.386166L582.833498 138.81155c-13.632455-23.580462-39.239363-39.515697-68.438607-39.515697-29.199244 0-54.898264 15.935234-68.438608 39.515697z"
                          p-id="2554"
                        ></path></svg
                    ></span>
                  </p>
                </div>
              </a>
            </li>
            <li class="col-sm-12 col-lg-4 float-left data-item">
              <a href="javascript:;" class="shadow-sm clearfix">
                <div
                  class="rounded-circle text-center bg-info float-left icon-bg"
                >
                  <svg
                    t="1652421703444"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="6783"
                    width="200"
                    height="200"
                  >
                    <path
                      d="M487.424 974.848c-8.704 0-17.408-2.048-25.6-6.656C358.4 912.384 232.448 899.072 87.04 883.2l-13.312-1.536c-33.28-3.072-58.368-30.72-58.368-64.512V276.48c0-35.328 29.184-65.024 65.024-66.048 163.84-2.56 306.688 26.624 424.448 87.552 21.504 10.752 35.328 33.792 35.328 57.856V921.6c0 18.944-9.728 36.352-26.112 46.08-8.192 4.608-17.408 7.168-26.624 7.168zM100.864 261.632h-19.456c-8.192 0-14.848 6.656-14.848 14.848v540.672c0 7.168 5.632 13.312 12.8 13.824l13.312 1.536c151.04 15.872 281.088 30.208 393.728 90.624h0.512c0.512 0.512 1.024 0.512 1.536 0 0.512-0.512 1.024-1.024 1.024-1.536V355.84c0-5.12-3.072-10.24-7.168-12.288-106.496-54.784-234.496-81.92-381.44-81.92z"
                      p-id="6784"
                    ></path>
                    <path
                      d="M544.256 973.312c-9.728 0-19.456-2.56-28.16-8.192-16.896-10.24-27.136-28.16-26.624-48.128V355.328c0-24.576 13.824-47.616 35.84-58.368 117.76-60.416 260.608-90.112 423.936-87.04 35.84 1.024 65.024 30.208 65.024 66.048v540.672c0 33.792-25.088 61.44-58.88 65.024l-20.992 2.56c-141.312 15.36-263.168 29.184-364.032 82.944-8.192 4.096-17.408 6.144-26.112 6.144zM928.768 261.12c-146.432 0-274.432 27.648-380.416 81.92-4.608 2.56-7.68 7.168-7.68 12.8v562.688c0 1.536 0.512 2.56 2.048 3.584 1.536 1.024 2.56 0.512 3.072 0h0.512c109.568-58.368 236.032-72.192 382.976-88.576l20.992-2.56c7.68-0.512 13.312-6.656 13.312-13.824V275.968c0-8.192-6.656-14.848-14.848-14.848h-19.968z"
                      p-id="6785"
                    ></path>
                    <path
                      d="M386.56 502.272c-3.072 0-6.656-0.512-9.728-2.048-67.584-27.136-136.704-40.96-204.288-40.96-14.336 0-25.6-11.264-25.6-25.6s11.264-25.6 25.6-25.6c74.24 0 149.504 14.848 223.744 45.056 13.312 5.12 19.456 19.968 14.336 33.28-4.096 9.728-13.824 15.872-24.064 15.872zM386.56 673.792c-3.072 0-6.656-0.512-9.728-2.048-67.584-27.136-136.704-40.96-204.288-40.96-14.336 0-25.6-11.264-25.6-25.6s11.264-25.6 25.6-25.6c74.24 0 149.504 14.848 223.744 45.056 13.312 5.12 19.456 19.968 14.336 33.28-4.096 9.728-13.824 15.872-24.064 15.872zM643.072 502.272c-10.24 0-19.968-6.144-23.552-15.872-5.12-13.312 1.024-28.16 14.336-33.28 73.728-29.696 148.992-45.056 223.744-45.056 14.336 0 25.6 11.264 25.6 25.6s-11.264 25.6-25.6 25.6c-68.096 0-136.704 13.824-204.288 40.96-3.584 1.536-7.168 2.048-10.24 2.048zM643.072 673.792c-10.24 0-19.968-6.144-23.552-15.872-5.12-13.312 1.024-28.16 14.336-33.28 73.728-29.696 148.992-45.056 223.744-45.056 14.336 0 25.6 11.264 25.6 25.6s-11.264 25.6-25.6 25.6c-68.096 0-136.704 13.824-204.288 40.96-3.584 1.536-7.168 2.048-10.24 2.048z"
                      p-id="6786"
                    ></path>
                  </svg>
                </div>
                <div class="right-text">
                  <p>本周发布文章数</p>
                  <p>
                    <span class="text-info">{{ now_week_article.length }}</span
                    >数据
                    <span
                      ><svg
                        t="1652422683666"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="2698"
                        width="200"
                        height="200"
                      >
                        <path
                          d="M445.956283 138.81155L240.916794 493.900153c-11.329675 19.52757-12.066565 44.213367 0 65.122605 12.066565 20.909238 33.896915 32.607358 56.464154 32.607358h89.71629v275.043987c0 31.96258 25.975353 57.937933 57.937933 57.937933h134.021769c32.054691 0 57.937933-25.975353 57.937933-57.937933V591.630116h83.45273c24.685797 0 48.634704-12.803454 61.806602-35.739138 13.171899-22.843573 12.342898-50.016371 0-71.386166L582.833498 138.81155c-13.632455-23.580462-39.239363-39.515697-68.438607-39.515697-29.199244 0-54.898264 15.935234-68.438608 39.515697z"
                          p-id="2699"
                        ></path></svg
                    ></span>
                  </p>
                </div>
              </a>
            </li>
            <li class="col-sm-12 col-lg-4 float-left data-item">
              <a href="javascript:;" class="shadow-sm clearfix">
                <div
                  class="
                    rounded-circle
                    text-center
                    bg-success
                    float-left
                    icon-bg
                  "
                >
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-pinglun"></use>
                  </svg>
                </div>
                <div class="right-text">
                  <p>本周访客评论数</p>
                  <p>
                    <span class="text-success">{{
                      now_week_comment.length
                    }}</span>
                    数据
                    <span>
                      <svg
                        t="1652422683666"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="2698"
                        width="200"
                        height="200"
                      >
                        <path
                          d="M445.956283 138.81155L240.916794 493.900153c-11.329675 19.52757-12.066565 44.213367 0 65.122605 12.066565 20.909238 33.896915 32.607358 56.464154 32.607358h89.71629v275.043987c0 31.96258 25.975353 57.937933 57.937933 57.937933h134.021769c32.054691 0 57.937933-25.975353 57.937933-57.937933V591.630116h83.45273c24.685797 0 48.634704-12.803454 61.806602-35.739138 13.171899-22.843573 12.342898-50.016371 0-71.386166L582.833498 138.81155c-13.632455-23.580462-39.239363-39.515697-68.438607-39.515697-29.199244 0-54.898264 15.935234-68.438608 39.515697z"
                          p-id="2699"
                        ></path>
                      </svg>
                    </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="pic-table shadow-sm border">
          <div class="table-body">
            <div class="echarts" ref="echarts"></div>
          </div>
        </div>
        <div class="commonBox shadow-sm border p-3">
          <p>常用功能</p>
          <ul class="d-flex flex-wrap">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      nickname: this.$store.state.nickname,
      username: this.$store.state.username,
      userImg: this.$store.state.userImg,
      myEcharts: "",
      visTotal: 0,
      artTotal: 0,
      comTotal: 0,
      day_visit: [0, 0, 0, 0, 0, 0, 0],
      day_article: [0, 0, 0, 0, 0, 0, 0],
      day_comment: [0, 0, 0, 0, 0, 0, 0],
      now_day_article: [],
      now_week_visit: [],
      now_week_article: [[], [], [], [], [], [], []],
      now_week_comment: [[], [], [], [], [], [], []],
    };
  },
  created() {
    // 获取本周已发布的文章
    const artInfo = {
      author: this.username,
      artSort: "",
      artKeywords: "",
      artState: "",
    };
    /*
        data: 需要处理的对象,
        time: 对象挂载的时间属性,
        dayArr: Echarts饼图渲染数据的数组,
        RT_Data: 本周数据
      */
    const now_week = (data, time, dayArr, RT_Data) => {
      const now = new Date();
      const nowTime = now.getTime();
      const day = now.getDay() || 7; //为周日的时候 day 修改为7  否则当天周天会有问题
      let oneDayTime = 24 * 60 * 60 * 1000;
      let Monday = new Date(nowTime - (day - 1) * oneDayTime).getDate(); //显示周一
      let Tuesday = new Date(nowTime - (day - 2) * oneDayTime).getDate(); //显示周二
      let Wednesday = new Date(nowTime - (day - 3) * oneDayTime).getDate(); //显示周三
      let Thursday = new Date(nowTime - (day - 4) * oneDayTime).getDate(); //显示周四
      let Friday = new Date(nowTime + (5 - day) * oneDayTime).getDate(); //显示周五
      let Saturday = new Date(nowTime + (6 - day) * oneDayTime).getDate(); //显示周六
      let Sunday = new Date(nowTime + (7 - day) * oneDayTime).getDate(); //显示周日
      switch (time) {
        // 周一评论数
        case Monday:
          dayArr[0] = dayArr[0] + 1;
          RT_Data[0].push(data);
          break;
        // 周二评论数
        case Tuesday:
          dayArr[1] = dayArr[1] + 1;
          RT_Data[1].push(data);
          break;
        // 周三评论数
        case Wednesday:
          dayArr[2] = dayArr[2] + 1;
          RT_Data[2].push(data);
          break;
        // 周四评论数
        case Thursday:
          dayArr[3] = dayArr[3] + 1;
          RT_Data[3].push(data);
          break;
        // 周五评论数
        case Friday:
          dayArr[4] = dayArr[4] + 1;
          RT_Data[4].push(data);
          break;
        // 周六评论数
        case Saturday:
          dayArr[5] = dayArr[5] + 1;
          RT_Data[5].push(data);
          break;
        // 周日评论数
        case Sunday:
          dayArr[6] = dayArr[6] + 1;
          RT_Data[6].push(data);
          break;
      }
      return dayArr, RT_Data;
    };
    this.$http.get("/article/getArtInfo", artInfo).then((res) => {
      // 对获取到的文章数据进行处理
      // 获取本周文章数
      for (let i = 0; i < res.data.length; i++) {
        // 将文章状态标记为已发布的文章统计
        if (res.data[i].artState === 1) {
          this.artTotal++;
          now_week(
            res.data[i],
            new Date(res.data[i].artTime).getDate(),
            this.day_article,
            this.now_week_article
          );
          // 统计今日发表文章数
          if (
            new Date(res.data[i].artTime).getDate() === new Date().getDate()
          ) {
            this.now_day_article.push(res.data[i]);
          }
        }
      }
      this.now_week_article = this.now_week_article.flat();
    });

    this.$http.get("/common/getMyCommon", this.username).then((c_res) => {
      console.log(c_res.data);
      // 对获取到的评论数据进行处理
      // 获取本周评论数
      for (let i = 0; i < c_res.data.length; i++) {
        // 将评论状态标记为未删除的评论统计
        if (c_res.data[i].c_state == 0) {
          this.comTotal++;
          new Promise((resolve, reject) => {
            now_week(
              c_res.data[i],
              new Date(c_res.data[i].c_time).getDate(),
              this.day_comment,
              this.now_week_comment
            );
            resolve();
          }).then(() => {});
        }
        this.$http
          .get("/common/getReply", c_res.data[i].c_id)
          .then((cr_res) => {
            if (cr_res.status === 0) {
              console.log(cr_res);
              // 对未删除的回复进行处理，与本周评论数据进行合并
              for (let i = 0; i < cr_res.data.length; i++) {
                this.comTotal++;
                new Promise((resolve, reject) => {
                  now_week(
                    cr_res.data[i],
                    new Date(cr_res.data[i].cr_time).getDate(),
                    this.day_comment,
                    this.now_week_comment
                  );
                  resolve();
                }).then(() => {
                  this.now_week_comment = this.now_week_comment.flat(1);
                });
              }
            }
          });
      }
    });
  },
  mounted() {
    // 初始化
    this.myEcharts = this.$echarts.init(this.$refs.echarts);
    // 设置echarts数据
    let visit, artNum, comment;
    new Promise((resolve, reject) => {
      setTimeout(() => {
        visit = this.day_visit;
        artNum = this.day_article;
        comment = this.day_comment;
        resolve();
      }, 200);
    }).then(() => {
      const option = {
        color: ["#007bff", "#17a2b8", "#28a745"],
        title: {
          text: "本周数据统计",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          top: "5%",
          data: ["访客数", "文章数", "评论数"],
        },
        grid: {
          left: "3%",
          right: "3%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: true,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "访客数",
            type: "line",
            stack: "总量1",
            data: visit,
          },
          {
            name: "文章数",
            type: "line",
            stack: "总量2",
            data: artNum,
          },
          {
            name: "评论数",
            type: "line",
            stack: "总量3",
            data: comment,
          },
        ],
      };
      // 需要渲染数据过多时的加载动画
      this.myEcharts.hideLoading();
      // 渲染echarts图表
      this.myEcharts.setOption(option);
    });
    // window窗口尺寸发生变化时，重置echarts的尺寸
    window.onresize = () => {
      this.myEcharts.resize();
    };
  },
};
</script>

<style lang="less" scoped>
.indexBox {
  padding: 0 10px;
  margin: 0 auto;
  .welcome-left-container {
    .user {
      margin: 0 15px;
      background: #fff;
      .userInfo {
        padding: 32px 40px 20px;
        .text {
          flex: 1;
          width: 0;
          overflow: hidden;
          flex-direction: column;
          text-align: left;
          justify-content: center;
          p:nth-child(1) {
            font-size: 18px;
            word-break: keep-all;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          p:nth-child(2) {
            color: #8b9db6;
            vertical-align: middle;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 90%;
          }
          .username {
            font-size: 14px;
          }
          .userState {
            display: inline;
            padding: 2px 5px;
            text-align: center;
            border-radius: 5px;
            font-size: 14px;
          }
        }
        .userImg {
          width: 60px;
          height: 60px;
          border: 2px solid #000;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
      }
      .tips {
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .total {
      margin: 0 15px;
      background: #fff;
      p {
        padding: 10px;
        margin: 0;
        line-height: 20px;
      }
    }

    .newMsg {
      margin: 0 15px;
      margin-bottom: 20px;
      background: #fff;
      ul {
        width: 100%;
        .userMsg {
          .userImg {
            width: 40px;
            height: 40px;
            margin-top: 6px;
            overflow: hidden;
            img {
              width: 100%;
            }
          }
          .msgBox {
            position: relative;
            width: 70%;
            line-height: 30px;
            box-shadow: 0 3px 8px rgb(0 0 0 / 15%);
            &::before {
              position: absolute;
              top: 3.5px;
              left: -8px;
              content: "";
              width: 15px;
              height: 15px;
              border-top: none;
              border-right: none;
              background: rgb(148, 211, 223);
              transform: rotate(45deg);
            }

            .msgInfo {
              padding: 5px 15px;
              font-size: 12px;
              color: #fff;
              background: rgb(148, 211, 223);
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              .username {
                font-weight: 800;
              }
              .msgTime {
                font-weight: 600;
              }
            }

            .msgText {
              padding: 5px 15px;
              font-size: 14px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
          }
        }
      }
    }
  }
  .welcome-right-container {
    margin-bottom: 20px;
    .data-show {
      margin-bottom: 20px;
      ul {
        li {
          height: 90px;
          a {
            display: block;
            height: 100%;
            padding: 10px;
            border: 1px solid rgb(223, 223, 223);
            background: #fff;
            box-sizing: border-box;
            .icon-bg {
              width: 68px;
              height: 68px;
              .icon {
                margin-top: 15px;
                color: #fff;
                font-size: 40px;
              }
            }
            .right-text {
              padding-left: 78px;
              p {
                margin: 0;
                color: #a0a8b4;
                &:nth-child(1) {
                  margin-bottom: 10px;
                  font-size: 16px;
                  color: #555555;
                }
                &:nth-child(2) {
                  font-size: 14px;
                  span:nth-child(1) {
                    font-size: 28px;
                    padding-right: 10px;
                    font-family: "arial";
                  }
                }
              }
            }
          }
        }
      }
    }
    .pic-table {
      margin: 0px 15px;
      margin-bottom: 20px;
      padding: 15px;
      border: 1px solid #ebeaea;
      background-color: #fff;
      .table-body {
        height: 410px;
        user-select: none;
        background-color: rgba(0, 0, 0, 0);
        cursor: default;
        .echarts {
          width: 100%;
          height: 100%;
        }
      }
    }
    .commonBox {
      margin: 0 15px;
      background: #fff;
      ul {
        li {
          float: left;
          width: 20%;
          height: 150px;
          border: 1px solid #eee;
          box-sizing: border-box;
          &:hover {
            box-shadow: 0 0 38px rgb(0 0 0 / 8%) inset;
            transition: all 0.25s ease;
          }
          &:not(first-child) {
            margin-left: -1px;
            margin-top: -1px;
          }
          .img {
            height: 40px;
            margin: 35px 0 20px;
            font-size: 30px;
            text-align: center;
          }

          .sname {
            text-align: center;
            color: #999;
          }
        }
      }
    }
  }

  @media (max-width: 1400px) {
    .col-xl-9,
    .col-xl-3 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .welcome-left-container {
      width: 100%;
      .user {
        .userInfo {
          padding: 32px 40px 40px;
        }
      }
      .newMsg {
        ul {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          li {
            width: 50%;
          }
        }
      }
    }
  }
  @media (max-width: 992px) {
    .welcome-right-container {
      .data-show {
        ul {
          li {
            width: 50%;
            &:nth-last-child(1) {
              left: 50%;
              margin-top: 10px;
              transform: translateX(-50%);
            }
          }
        }
      }
      .commonBox {
        ul {
          li {
            width: 25%;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    .welcome-left-container {
      .newMsg {
        ul {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          li {
            width: 100%;
          }
        }
      }
    }
    .welcome-right-container {
      .commonBox {
        ul {
          li {
            width: 33.3333%;
          }
        }
      }
    }
  }
  @media (max-width: 576px) {
    .welcome-right-container {
      .data-show {
        ul {
          li {
            width: 100%;
            margin-top: 10px;
          }
        }
      }
      .commonBox {
        ul {
          li {
            width: 50%;
          }
        }
      }
    }
  }
}
</style>