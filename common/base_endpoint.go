package common

import "github.com/gin-gonic/gin"

type BaseEndpoints interface {
	MapHandlersToRoutes(router *gin.RouterGroup) *gin.RouterGroup
}
