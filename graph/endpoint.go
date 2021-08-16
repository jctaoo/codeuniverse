package graph

import (
	"codeuniverse/common"
	"codeuniverse/graph/generated"
	"path"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/gin-gonic/gin"
)

type Endpoints interface {
	common.BaseEndpoints
}

type EndpointsImpl struct {
	Endpoints
}

func NewEndpointsImpl() *EndpointsImpl {
	return &EndpointsImpl{}
}

func (e EndpointsImpl) MapHandlersToRoutes(router *gin.RouterGroup) *gin.RouterGroup {
	srv := handler.NewDefaultServer(
		generated.NewExecutableSchema(
			generated.Config{
				Resolvers: &Resolver{},
			},
		),
	)

	queryPath := path.Join(router.BasePath(), "query")
	ginSrv := gin.WrapH(srv)
	ginPlayground := gin.WrapH(playground.Handler("outer-graphql", queryPath))

	router.GET("/", ginPlayground)
	router.POST("/query", ginSrv)

	return router
}
