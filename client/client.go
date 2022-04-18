package main

import (
	"context"
	"fmt"
	"io"
	"log"

	pb "github.com/Shaneumayanga/stream/streaming"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

func main() {
	conn, err := grpc.Dial("localhost:8080", grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		panic(err)
	}
	client := pb.NewHelloServiceClient(conn)
	in := &pb.Request{
		Id: 1,
	}
	stream, err := client.FetchResponse(context.Background(), in)
	if err != nil {
		panic(err)
	}
	response, err := client.Login(context.Background(), &pb.LoginRequest{
		Username: "shane",
		Password: "lol",
	})

	if err != nil {
		panic(err)
	}
	fmt.Printf("response.Token: %v\n", response.Token)

	for {
		res, err := stream.Recv()
		if err == io.EOF {
			return
		}
		if err != nil {
			panic(err)
		}
		log.Printf("Result %s", res.Result)
	}

}
