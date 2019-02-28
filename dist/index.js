'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.computeCroppedArea = exports.restrictPosition = undefined

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps)
    if (staticProps) defineProperties(Constructor, staticProps)
    return Constructor
  }
})()

exports.calculateCropSize = calculateCropSize

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _helpers = require('./helpers')

var _styles = require('./styles')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  }
  return call && (typeof call === 'object' || typeof call === 'function') ? call : self
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' + typeof superClass
    )
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
  })
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass)
}

var MIN_ZOOM = 0.7
var MAX_ZOOM = 3

exports.restrictPosition = _helpers.restrictPosition
exports.computeCroppedArea = _helpers.computeCroppedArea
function calculateCropSize(width, height) {
  console.log('calculateCropSize', width, height)
  var imageStyleWidth = parseFloat(width).toFixed(2)
  var imageStyleHeight = parseFloat(height).toFixed(2)
  var windowToleranceHeight = window.innerHeight - 200
  var windowToleranceWidth = window.innerWidth - 50

  var boundingWidth = Math.max(window.innerWidth / 2, 770)
  var boundingHeight = Math.max(window.innerHeight, 675)

  if (windowToleranceWidth <= boundingWidth) {
    boundingWidth = windowToleranceWidth
  }

  if (windowToleranceHeight <= boundingHeight) {
    boundingHeight = windowToleranceHeight
  }

  var imageAspect = imageStyleWidth / imageStyleHeight
  if (imageStyleWidth > imageStyleHeight) {
    boundingHeight = boundingWidth / imageAspect

    if (boundingHeight > windowToleranceHeight) {
      boundingHeight = windowToleranceHeight
      boundingWidth = windowToleranceHeight * imageAspect
    }
  } else if (imageStyleWidth === imageStyleHeight) {
    if (boundingWidth > boundingHeight) {
      boundingWidth = boundingHeight
    } else {
      boundingHeight = boundingWidth
    }
  } else {
    boundingWidth = boundingHeight * imageAspect

    if (boundingWidth > windowToleranceWidth) {
      boundingWidth = windowToleranceWidth
      boundingHeight = windowToleranceWidth / imageAspect
    }
  }

  return { width: boundingWidth, height: boundingHeight }
}

var Cropper = (function(_React$Component) {
  _inherits(Cropper, _React$Component)

  function Cropper() {
    var _ref

    var _temp, _this, _ret

    _classCallCheck(this, Cropper)

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key]
    }

    return (
      (_ret = ((_temp = ((_this = _possibleConstructorReturn(
        this,
        (_ref = Cropper.__proto__ || Object.getPrototypeOf(Cropper)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.image = null),
      (_this.container = null),
      (_this.containerRect = {}),
      (_this.imageSize = { width: 0, height: 0, naturalWidth: 0, naturalHeight: 0 }),
      (_this.dragStartPosition = { x: 0, y: 0 }),
      (_this.dragStartCrop = { x: 0, y: 0 }),
      (_this.lastPinchDistance = 0),
      (_this.rafDragTimeout = null),
      (_this.rafZoomTimeout = null),
      (_this.state = {
        cropSize: null,
      }),
      (_this.preventZoomSafari = function(e) {
        return e.preventDefault()
      }),
      (_this.cleanEvents = function() {
        document.removeEventListener('mousemove', _this.onMouseMove)
        document.removeEventListener('mouseup', _this.onDragStopped)
        document.removeEventListener('touchmove', _this.onTouchMove)
        document.removeEventListener('touchend', _this.onDragStopped)
      }),
      (_this.onImgLoad = function() {
        _this.computeSizes()
        _this.emitCropData()
      }),
      (_this.computeSizes = function() {
        if (_this.image) {
          var _calculateCropSize = calculateCropSize(
              _this.props.style.imageStyle.width,
              _this.props.style.imageStyle.height
            ),
            width = _calculateCropSize.width,
            height = _calculateCropSize.height

          var imageStyleWidth = parseFloat(_this.props.style.imageStyle.width).toFixed(2)
          var imageStyleHeight = parseFloat(_this.props.style.imageStyle.height).toFixed(2)
          var windowToleranceHeight = window.innerHeight - window.innerHeight * 0.3
          var windowToleranceWidth = window.innerWidth - 50

          var boundingWidth = Math.max(window.innerWidth / 2, 770)
          var _boundingHeight = Math.max(window.innerHeight, 675)

          if (windowToleranceWidth <= boundingWidth) {
            boundingWidth = windowToleranceWidth
          }

          if (windowToleranceHeight <= _boundingHeight) {
            _boundingHeight = windowToleranceHeight
          }

          var imageAspect = imageStyleWidth / imageStyleHeight
          if (imageStyleWidth > imageStyleHeight) {
            _boundingHeight = boundingWidth / imageAspect

            if (_boundingHeight > windowToleranceHeight) {
              _boundingHeight = windowToleranceHeight
              boundingWidth = windowToleranceHeight * imageAspect
            }
          } else if (imageStyleWidth === imageStyleHeight) {
            if (boundingWidth > _boundingHeight) {
              boundingWidth = _boundingHeight
            } else {
              _boundingHeight = boundingWidth
            }
          } else {
            boundingWidth = _boundingHeight * imageAspect

            if (boundingWidth > windowToleranceWidth) {
              boundingWidth = windowToleranceWidth
              _boundingHeight = windowToleranceWidth / imageAspect
            }
          }

          _this.imageSize = {
            width: width,
            height: height,
            naturalWidth: _this.image.naturalWidth,
            naturalHeight: _this.image.naturalHeight,
          }
          var cropSize = (0, _helpers.getCropSize)(width, height, _this.props.aspect)
          _this.setState({ cropSize: cropSize }, _this.recomputeCropPosition)
        }

        console.log(boundingHeight)
        if (_this.container) {
          _this.containerRect = _this.container.getBoundingClientRect()
        }
      }),
      (_this.onMouseDown = function(e) {
        e.preventDefault()
        document.addEventListener('mousemove', _this.onMouseMove)
        document.addEventListener('mouseup', _this.onDragStopped)
        _this.onDragStart(Cropper.getMousePoint(e))
      }),
      (_this.onMouseMove = function(e) {
        return _this.onDrag(Cropper.getMousePoint(e))
      }),
      (_this.onTouchStart = function(e) {
        e.preventDefault()
        document.addEventListener('touchmove', _this.onTouchMove, { passive: false }) // iOS 11 now defaults to passive: true
        document.addEventListener('touchend', _this.onDragStopped)
        if (e.touches.length === 2) {
          _this.onPinchStart(e)
        } else if (e.touches.length === 1) {
          _this.onDragStart(Cropper.getTouchPoint(e.touches[0]))
        }
      }),
      (_this.onTouchMove = function(e) {
        if (e.touches.length === 2) {
          _this.onPinchMove(e)
        } else if (e.touches.length === 1) {
          _this.onDrag(Cropper.getTouchPoint(e.touches[0]))
        }
      }),
      (_this.onDragStart = function(_ref2) {
        var x = _ref2.x,
          y = _ref2.y

        _this.dragStartPosition = { x: x, y: y }
        _this.dragStartCrop = { x: _this.props.crop.x, y: _this.props.crop.y }
      }),
      (_this.onDrag = function(_ref3) {
        var x = _ref3.x,
          y = _ref3.y

        if (_this.rafDragTimeout) window.cancelAnimationFrame(_this.rafDragTimeout)

        _this.rafDragTimeout = window.requestAnimationFrame(function() {
          if (x === undefined || y === undefined) return
          var offsetX = x - _this.dragStartPosition.x
          var offsetY = y - _this.dragStartPosition.y
          var requestedPosition = {
            x: _this.dragStartCrop.x + offsetX,
            y: _this.dragStartCrop.y + offsetY,
          }

          var newPosition = (0, _helpers.restrictPosition)(
            requestedPosition,
            _this.imageSize,
            _this.state.cropSize,
            _this.props.zoom
          )
          _this.props.onCropChange(newPosition)
        })
      }),
      (_this.onDragStopped = function() {
        _this.cleanEvents()
        _this.emitCropData()
      }),
      (_this.onWheel = function(e) {
        e.preventDefault()
        var point = Cropper.getMousePoint(e)
        var newZoom = _this.props.zoom - (e.deltaY * _this.props.zoomSpeed) / 200
        _this.setNewZoom(newZoom, point)
      }),
      (_this.getPointOnContainer = function(_ref4, zoom) {
        var x = _ref4.x,
          y = _ref4.y

        if (!_this.containerRect) {
          throw new Error('The Cropper is not mounted')
        }
        return {
          x: _this.containerRect.width / 2 - (x - _this.containerRect.left),
          y: _this.containerRect.height / 2 - (y - _this.containerRect.top),
        }
      }),
      (_this.getPointOnImage = function(_ref5) {
        var x = _ref5.x,
          y = _ref5.y
        var _this$props = _this.props,
          crop = _this$props.crop,
          zoom = _this$props.zoom

        return {
          x: (x + crop.x) / zoom,
          y: (y + crop.y) / zoom,
        }
      }),
      (_this.setNewZoom = function(zoom, point) {
        var zoomPoint = _this.getPointOnContainer(point)
        var zoomTarget = _this.getPointOnImage(zoomPoint)
        var newZoom = Math.min(_this.props.maxZoom, Math.max(zoom, _this.props.minZoom))
        var requestedPosition = {
          x: zoomTarget.x * newZoom - zoomPoint.x,
          y: zoomTarget.y * newZoom - zoomPoint.y,
        }
        var newPosition = (0, _helpers.restrictPosition)(
          requestedPosition,
          _this.imageSize,
          _this.state.cropSize,
          newZoom
        )

        _this.props.onCropChange(newPosition)

        _this.props.onZoomChange && _this.props.onZoomChange(newZoom)
      }),
      (_this.emitCropData = function() {
        if (!_this.state.cropSize) return
        // this is to ensure the crop is correctly restricted after a zoom back (https://github.com/ricardo-ch/react-easy-crop/issues/6)
        var restrictedPosition = (0, _helpers.restrictPosition)(
          _this.props.crop,
          _this.imageSize,
          _this.state.cropSize,
          _this.props.zoom
        )

        var _computeCroppedArea = (0, _helpers.computeCroppedArea)(
            _this.image,
            restrictedPosition,
            _this.imageSize,
            _this.state.cropSize,
            _this.props.zoom
          ),
          croppedAreaPercentages = _computeCroppedArea.croppedAreaPercentages,
          croppedAreaPixels = _computeCroppedArea.croppedAreaPixels

        _this.props.onCropComplete &&
          _this.props.onCropComplete(croppedAreaPercentages, croppedAreaPixels)
      }),
      (_this.recomputeCropPosition = function() {
        var newPosition = (0, _helpers.restrictPosition)(
          _this.props.crop,
          _this.imageSize,
          _this.state.cropSize,
          _this.props.zoom
        )
        _this.props.onCropChange(newPosition)
        _this.emitCropData()
      }),
      _temp)),
      _possibleConstructorReturn(_this, _ret)
    )
  }

  _createClass(Cropper, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        window.addEventListener('resize', this.computeSizes)
        this.container.addEventListener('gesturestart', this.preventZoomSafari)
        this.container.addEventListener('gesturechange', this.preventZoomSafari)
      },
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener('resize', this.computeSizes)
        this.container.removeEventListener('gesturestart', this.preventZoomSafari)
        this.container.removeEventListener('gesturechange', this.preventZoomSafari)
        this.cleanEvents()
      },
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (prevProps.aspect !== this.props.aspect) {
          this.computeSizes()
        } else if (prevProps.zoom !== this.props.zoom) {
          this.recomputeCropPosition()
        }
      },

      // this is to prevent Safari on iOS >= 10 to zoom the page
    },
    {
      key: 'onPinchStart',
      value: function onPinchStart(e) {
        var pointA = Cropper.getTouchPoint(e.touches[0])
        var pointB = Cropper.getTouchPoint(e.touches[1])
        this.lastPinchDistance = (0, _helpers.getDistanceBetweenPoints)(pointA, pointB)
        this.onDragStart((0, _helpers.getCenter)(pointA, pointB))
      },
    },
    {
      key: 'onPinchMove',
      value: function onPinchMove(e) {
        var _this2 = this

        var pointA = Cropper.getTouchPoint(e.touches[0])
        var pointB = Cropper.getTouchPoint(e.touches[1])
        var center = (0, _helpers.getCenter)(pointA, pointB)
        this.onDrag(center)

        if (this.rafZoomTimeout) window.cancelAnimationFrame(this.rafZoomTimeout)
        this.rafZoomTimeout = window.requestAnimationFrame(function() {
          var distance = (0, _helpers.getDistanceBetweenPoints)(pointA, pointB)
          var newZoom = _this2.props.zoom * (distance / _this2.lastPinchDistance)
          _this2.setNewZoom(newZoom, center)
          _this2.lastPinchDistance = distance
        })
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this3 = this

        var _props = this.props,
          _props$crop = _props.crop,
          x = _props$crop.x,
          y = _props$crop.y,
          zoom = _props.zoom,
          cropShape = _props.cropShape,
          showGrid = _props.showGrid,
          _props$style = _props.style,
          containerStyle = _props$style.containerStyle,
          cropAreaStyle = _props$style.cropAreaStyle,
          imageStyle = _props$style.imageStyle,
          _props$classes = _props.classes,
          containerClassName = _props$classes.containerClassName,
          cropAreaClassName = _props$classes.cropAreaClassName,
          imageClassName = _props$classes.imageClassName

        var patchedX = x
        var patchedY = y

        if (this.imageSize && this.state.cropSize) {
          var currentImageWidth = this.imageSize.width * zoom
          var currentImageHeight = this.imageSize.height * zoom

          if (zoom < 1) {
            if (currentImageWidth < this.state.cropSize.width) {
              patchedX = 0
            }

            if (currentImageHeight < this.state.cropSize.height) {
              patchedY = 0
            }
          }
        }

        return _react2.default.createElement(
          _styles.Container,
          {
            onMouseDown: this.onMouseDown,
            onTouchStart: this.onTouchStart,
            onWheel: this.onWheel,
            innerRef: function innerRef(el) {
              return (_this3.container = el)
            },
            'data-testid': 'container',
            containerStyle: {
              position: 'relative',
              width: this.imageSize.width,
              height: this.imageSize.height,
              minHeight: this.imageSize.height,
            },
            className: containerClassName,
          },
          _react2.default.createElement(_styles.Img, {
            src: this.props.image,
            innerRef: function innerRef(el) {
              return (_this3.image = el)
            },
            onLoad: this.onImgLoad,
            onError: this.props.onImgError,
            alt: '',
            style: {
              transform: 'translate(' + patchedX + 'px, ' + patchedY + 'px) scale(' + zoom + ')',
            },
            imageStyle: {
              width: this.imageSize.width,
              height: this.imageSize.height,
              minHeight: this.imageSize.height,
            },
            className: imageClassName,
          }),
          ';',
          this.state.cropSize &&
            _react2.default.createElement(_styles.CropArea, {
              cropShape: cropShape,
              showGrid: showGrid,
              style: {
                width: this.state.cropSize.width,
                height: this.state.cropSize.height,
              },
              'data-testid': 'cropper',
              cropAreaStyle: cropAreaStyle,
              className: cropAreaClassName,
            })
        )
      },
    },
  ])

  return Cropper
})(_react2.default.Component)

Cropper.getMousePoint = function(e) {
  return { x: Number(e.clientX), y: Number(e.clientY) }
}

Cropper.getTouchPoint = function(touch) {
  return {
    x: Number(touch.clientX),
    y: Number(touch.clientY),
  }
}

Cropper.defaultProps = {
  zoom: 1,
  aspect: 4 / 3,
  maxZoom: MAX_ZOOM,
  minZoom: MIN_ZOOM,
  cropShape: 'rect',
  showGrid: true,
  style: {},
  classes: {},
  zoomSpeed: 1,
}

exports.default = Cropper
