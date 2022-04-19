/**
 * @fileoverview gRPC-Web generated client stub for streaming
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.streaming = require('./stream_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.streaming.HelloServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.streaming.HelloServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.streaming.Request,
 *   !proto.streaming.Response>}
 */
const methodDescriptor_HelloService_FetchResponse = new grpc.web.MethodDescriptor(
  '/streaming.HelloService/FetchResponse',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.streaming.Request,
  proto.streaming.Response,
  /**
   * @param {!proto.streaming.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.streaming.Response.deserializeBinary
);


/**
 * @param {!proto.streaming.Request} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.streaming.Response>}
 *     The XHR Node Readable Stream
 */
proto.streaming.HelloServiceClient.prototype.fetchResponse =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/streaming.HelloService/FetchResponse',
      request,
      metadata || {},
      methodDescriptor_HelloService_FetchResponse);
};


/**
 * @param {!proto.streaming.Request} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.streaming.Response>}
 *     The XHR Node Readable Stream
 */
proto.streaming.HelloServicePromiseClient.prototype.fetchResponse =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/streaming.HelloService/FetchResponse',
      request,
      metadata || {},
      methodDescriptor_HelloService_FetchResponse);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.streaming.LoginRequest,
 *   !proto.streaming.LoginResponse>}
 */
const methodDescriptor_HelloService_Login = new grpc.web.MethodDescriptor(
  '/streaming.HelloService/Login',
  grpc.web.MethodType.UNARY,
  proto.streaming.LoginRequest,
  proto.streaming.LoginResponse,
  /**
   * @param {!proto.streaming.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.streaming.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.streaming.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.streaming.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.streaming.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.streaming.HelloServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/streaming.HelloService/Login',
      request,
      metadata || {},
      methodDescriptor_HelloService_Login,
      callback);
};


/**
 * @param {!proto.streaming.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.streaming.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.streaming.HelloServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/streaming.HelloService/Login',
      request,
      metadata || {},
      methodDescriptor_HelloService_Login);
};


module.exports = proto.streaming;

