#! /bin/bash

# 带上当前环境，可选参数：
# dev   => development
# test  => testing
# prod  => production
echo "export default '$1'" > ./config/env.js

yarn build

# TODO: deploy

echo "export default 'dev'" > ./config/env.js
