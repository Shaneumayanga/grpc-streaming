package main

import (
	"context"
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
