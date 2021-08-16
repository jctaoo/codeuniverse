help: ## 显示帮助信息
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

build: 	## 为当前系统构建可执行文件
	go build -o ./build/codeuniverse codeuniverse

debug: ## 为当前系统构建可执行文件并以调试模式启动
	go build -gcflags='-N -l' -o ./build/codeuniverse codeuniverse \
        && dlv --listen=:2345 --headless=true --api-version=2 exec ./codeuniverse

gen: graph ## 执行所有开发时生成动作

graph: ## 使用 gqlgen 生成 graphql 必要的文件
	go run github.com/99designs/gqlgen generate

clear: ## 清除编译或生成的文件及其代码
	rm -Rf ./build