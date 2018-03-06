import { app } from '../main'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import axios from 'axios'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import env from '../../config/env'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// 环境配置
let config = {
  prod: '/ajax',
  test: 'http://192.168.2.149',
  dev: 'http://192.168.2.204:3000/ajax/'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export const ajax = axios.create({
  baseURL: config[env],
  withCredentials: true,
  timeout: 30000{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/**
 * GET请求
 * @param {String} path 接口路径
 * @param {Object} params 请求参数
 */
let handleResolve = result => {
  if (app) app.$vux.loading.hide(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  let { status, msg } = result.data{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  if (status !== 0) {
    if (app) {
      app.$vux.toast.text(msg, 'bottom'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }
  }
  return result{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

let requestGet = (path, params) => {
  if (app) app.$vux.loading.show('loading...'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  return ajax
        .get(path, {
          params: params{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
        })
        .then(handleResolve){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}
