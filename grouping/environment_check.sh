#!/bin/bash

cd "$(dirname "$0")"

# =================================================================
# 如果還沒安裝node，則先安裝node

if command -v node &>/dev/null; then
  node_location=$(command -v node)
  echo "Node.js is installed at: $node_location"
else
  echo "Node.js is not installed."

  # install node.js in CentOS
  dnf module install nodejs:18/common
fi

# =================================================================
# 確認套件已經安裝

npm install -g crypto
npm install -g ini
yum install -y openssl