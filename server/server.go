package main

import (
	"log"
	"net"
	"sync"
	"time"

	pb "github.com/Shaneumayanga/stream/streaming"
	"google.golang.org/grpc"
)

type server struct {
	pb.UnimplementedHelloServiceServer
}

func (s *server) FetchResponse(in *pb.Request, reply pb.HelloService_FetchResponseServer) error {
	log.Printf("Fetch response for %d", in.Id)
	wg := &sync.WaitGroup{}
	for i := 0; i < 5; i++ {
		wg.Add(1)
		go func(count int64) {
			defer wg.Done()
			time.Sleep(time.Duration(count) * time.Second)
			resp := pb.Response{
				Result: "Shane is the best",
			}
			if err := reply.Send(&resp); err != nil {
				panic(err)
			}
		}(int64(i))
	}
	wg.Wait()
	return nil
}

func main() {
	lis, err := net.Listen("tcp", ":8080")
	if err != nil {
		panic(err)
	}

	s := grpc.NewServer()

	pb.RegisterHelloServiceServer(s, &server{})
	log.Println("Server starting on port :8080")

	if err := s.Serve(lis); err != nil {
		panic(err)
	}
}
