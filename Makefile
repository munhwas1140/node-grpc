proto:
	protoc \
	--plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto \
	--ts_proto_out=. \
	./src/protos/auth.proto \
	--ts_proto_opt=outputServices=grpc-js,env=node,esModuleInterop=true