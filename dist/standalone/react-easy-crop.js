;(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory(require('React'))
  else if (typeof define === 'function' && define.amd) define(['React'], factory)
  else if (typeof exports === 'object') exports['ReactEasyCrop'] = factory(require('React'))
  else root['ReactEasyCrop'] = factory(root['React'])
})(window, function(__WEBPACK_EXTERNAL_MODULE__2__) {
  return /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {} // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      }) // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ) // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true // Return the exports of the module
      /******/
      /******/ /******/ return module.exports
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter })
        /******/
      }
      /******/
    } // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function(exports) {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true })
      /******/
    } // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
      value,
      mode
    ) {
      /******/ if (mode & 1) value = __webpack_require__(value)
      /******/ if (mode & 8) return value
      /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value
      /******/ var ns = Object.create(null)
      /******/ __webpack_require__.r(ns)
      /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value })
      /******/ if (mode & 2 && typeof value != 'string')
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function(key) {
              return value[key]
            }.bind(null, key)
          )
      /******/ return ns
      /******/
    } // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module['default']
            }
          : /******/ function getModuleExports() {
              return module
            }
      /******/ __webpack_require__.d(getter, 'a', getter)
      /******/ return getter
      /******/
    } // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property)
    } // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = '' // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 14))
    /******/
  })(
    /************************************************************************/
    /******/ [
      /* 0 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* WEBPACK VAR INJECTION */ ;(function(global) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'flush',
            function() {
              return flush
            }
          )
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'hydrate',
            function() {
              return hydrate
            }
          )
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'cx',
            function() {
              return cx
            }
          )
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'merge',
            function() {
              return merge
            }
          )
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'getRegisteredStyles',
            function() {
              return getRegisteredStyles
            }
          )
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'injectGlobal',
            function() {
              return injectGlobal
            }
          )
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'keyframes',
            function() {
              return keyframes
            }
          )
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'css',
            function() {
              return css
            }
          )
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'sheet',
            function() {
              return sheet
            }
          )
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'caches',
            function() {
              return caches
            }
          )
          /* harmony import */ var create_emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            3
          )

          var context = typeof global !== 'undefined' ? global : {}

          var _createEmotion = Object(
              create_emotion__WEBPACK_IMPORTED_MODULE_0__[/* default */ 'a']
            )(context),
            flush = _createEmotion.flush,
            hydrate = _createEmotion.hydrate,
            cx = _createEmotion.cx,
            merge = _createEmotion.merge,
            getRegisteredStyles = _createEmotion.getRegisteredStyles,
            injectGlobal = _createEmotion.injectGlobal,
            keyframes = _createEmotion.keyframes,
            css = _createEmotion.css,
            sheet = _createEmotion.sheet,
            caches = _createEmotion.caches

          //# sourceMappingURL=index.es.js.map

          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(11)))

        /***/
      },
      /* 1 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        function memoize(fn) {
          var cache = {}
          return function(arg) {
            if (cache[arg] === undefined) cache[arg] = fn(arg)
            return cache[arg]
          }
        }

        /* harmony default export */ __webpack_exports__['a'] = memoize
        //# sourceMappingURL=index.es.js.map

        /***/
      },
      /* 2 */
      /***/ function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__2__

        /***/
      },
      /* 3 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'

        // EXTERNAL MODULE: ./node_modules/@emotion/memoize/dist/index.es.js
        var index_es = __webpack_require__(1)

        // CONCATENATED MODULE: ./node_modules/@emotion/unitless/dist/index.es.js
        var index = {
          animationIterationCount: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          // SVG-related properties
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        }

        /* harmony default export */ var dist_index_es = index
        //# sourceMappingURL=index.es.js.map

        // CONCATENATED MODULE: ./node_modules/@emotion/hash/dist/index.es.js
        /* eslint-disable */
        // murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
        function murmurhash2_32_gc(str) {
          var l = str.length,
            h = l ^ l,
            i = 0,
            k

          while (l >= 4) {
            k =
              (str.charCodeAt(i) & 0xff) |
              ((str.charCodeAt(++i) & 0xff) << 8) |
              ((str.charCodeAt(++i) & 0xff) << 16) |
              ((str.charCodeAt(++i) & 0xff) << 24)
            k = (k & 0xffff) * 0x5bd1e995 + ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16)
            k ^= k >>> 24
            k = (k & 0xffff) * 0x5bd1e995 + ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16)
            h = ((h & 0xffff) * 0x5bd1e995 + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16)) ^ k
            l -= 4
            ++i
          }

          switch (l) {
            case 3:
              h ^= (str.charCodeAt(i + 2) & 0xff) << 16

            case 2:
              h ^= (str.charCodeAt(i + 1) & 0xff) << 8

            case 1:
              h ^= str.charCodeAt(i) & 0xff
              h = (h & 0xffff) * 0x5bd1e995 + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16)
          }

          h ^= h >>> 13
          h = (h & 0xffff) * 0x5bd1e995 + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16)
          h ^= h >>> 15
          return (h >>> 0).toString(36)
        }

        /* harmony default export */ var hash_dist_index_es = murmurhash2_32_gc
        //# sourceMappingURL=index.es.js.map

        // CONCATENATED MODULE: ./node_modules/@emotion/stylis/dist/index.es.js
        var V = function ca(W) {
          function M(d, c, f, h, a) {
            for (
              var k = 0,
                b = 0,
                u = 0,
                l = 0,
                q,
                m,
                e,
                D = 0,
                y = 0,
                r,
                E = (r = q = 0),
                n = 0,
                J = (m = 0),
                t = 0,
                K = f.length,
                F = K - 1,
                w,
                g = '',
                p = '',
                G = '',
                H = '',
                A;
              n < K;

            ) {
              e = f.charCodeAt(n)
              n === F &&
                0 !== b + l + u + k &&
                (0 !== b && (e = 47 === b ? 10 : 47), (l = u = k = 0), K++, F++)

              if (0 === b + l + u + k) {
                if (n === F && (0 < m && (g = g.replace(N, '')), 0 < g.trim().length)) {
                  switch (e) {
                    case 32:
                    case 9:
                    case 59:
                    case 13:
                    case 10:
                      break

                    default:
                      g += f.charAt(n)
                  }

                  e = 59
                }

                switch (e) {
                  case 123:
                    g = g.trim()
                    q = g.charCodeAt(0)
                    r = 1

                    for (t = ++n; n < K; ) {
                      e = f.charCodeAt(n)

                      switch (e) {
                        case 123:
                          r++
                          break

                        case 125:
                          r--
                      }

                      if (0 === r) break
                      n++
                    }

                    e = f.substring(t, n)
                    0 === q && (q = (g = g.replace(da, '').trim()).charCodeAt(0))

                    switch (q) {
                      case 64:
                        0 < m && (g = g.replace(N, ''))
                        m = g.charCodeAt(1)

                        switch (m) {
                          case 100:
                          case 109:
                          case 115:
                          case 45:
                            r = c
                            break

                          default:
                            r = O
                        }

                        e = M(c, r, e, m, a + 1)
                        t = e.length
                        0 < z &&
                          ((r = X(O, g, J)),
                          (A = I(3, e, r, c, B, x, t, m, a, h)),
                          (g = r.join('')),
                          void 0 !== A && 0 === (t = (e = A.trim()).length) && ((m = 0), (e = '')))
                        if (0 < t)
                          switch (m) {
                            case 115:
                              g = g.replace(ea, fa)

                            case 100:
                            case 109:
                            case 45:
                              e = g + '{' + e + '}'
                              break

                            case 107:
                              g = g.replace(ha, '$1 $2')
                              e = g + '{' + e + '}'
                              e =
                                1 === v || (2 === v && L('@' + e, 3))
                                  ? '@-webkit-' + e + '@' + e
                                  : '@' + e
                              break

                            default:
                              ;(e = g + e), 112 === h && (e = ((p += e), ''))
                          }
                        else e = ''
                        break

                      default:
                        e = M(c, X(c, g, J), e, h, a + 1)
                    }

                    G += e
                    r = J = m = E = q = 0
                    g = ''
                    e = f.charCodeAt(++n)
                    break

                  case 125:
                  case 59:
                    g = (0 < m ? g.replace(N, '') : g).trim()
                    if (1 < (t = g.length))
                      switch (
                        (0 === E &&
                          ((q = g.charCodeAt(0)), 45 === q || (96 < q && 123 > q)) &&
                          (t = (g = g.replace(' ', ':')).length),
                        0 < z &&
                          void 0 !== (A = I(1, g, c, d, B, x, p.length, h, a, h)) &&
                          0 === (t = (g = A.trim()).length) &&
                          (g = '\x00\x00'),
                        (q = g.charCodeAt(0)),
                        (m = g.charCodeAt(1)),
                        q + m)
                      ) {
                        case 0:
                          break

                        case 169:
                        case 163:
                          H += g + f.charAt(n)
                          break

                        default:
                          58 !== g.charCodeAt(t - 1) && (p += P(g, q, m, g.charCodeAt(2)))
                      }
                    J = m = E = q = 0
                    g = ''
                    e = f.charCodeAt(++n)
                }
              }

              switch (e) {
                case 13:
                case 10:
                  47 === b ? (b = 0) : 0 === 1 + q && ((m = 1), (g += '\x00'))
                  0 < z * Y && I(0, g, c, d, B, x, p.length, h, a, h)
                  x = 1
                  B++
                  break

                case 59:
                case 125:
                  if (0 === b + l + u + k) {
                    x++
                    break
                  }

                default:
                  x++
                  w = f.charAt(n)

                  switch (e) {
                    case 9:
                    case 32:
                      if (0 === l + k + b)
                        switch (D) {
                          case 44:
                          case 58:
                          case 9:
                          case 32:
                            w = ''
                            break

                          default:
                            32 !== e && (w = ' ')
                        }
                      break

                    case 0:
                      w = '\\0'
                      break

                    case 12:
                      w = '\\f'
                      break

                    case 11:
                      w = '\\v'
                      break

                    case 38:
                      0 === l + b + k && ((m = J = 1), (w = '\f' + w))
                      break

                    case 108:
                      if (0 === l + b + k + C && 0 < E)
                        switch (n - E) {
                          case 2:
                            112 === D && 58 === f.charCodeAt(n - 3) && (C = D)

                          case 8:
                            111 === y && (C = y)
                        }
                      break

                    case 58:
                      0 === l + b + k && (E = n)
                      break

                    case 44:
                      0 === b + u + l + k && ((m = 1), (w += '\r'))
                      break

                    case 34:
                    case 39:
                      0 === b && (l = l === e ? 0 : 0 === l ? e : l)
                      break

                    case 91:
                      0 === l + b + u && k++
                      break

                    case 93:
                      0 === l + b + u && k--
                      break

                    case 41:
                      0 === l + b + k && u--
                      break

                    case 40:
                      if (0 === l + b + k) {
                        if (0 === q)
                          switch (2 * D + 3 * y) {
                            case 533:
                              break

                            default:
                              q = 1
                          }
                        u++
                      }

                      break

                    case 64:
                      0 === b + u + l + k + E + r && (r = 1)
                      break

                    case 42:
                    case 47:
                      if (!(0 < l + k + u))
                        switch (b) {
                          case 0:
                            switch (2 * e + 3 * f.charCodeAt(n + 1)) {
                              case 235:
                                b = 47
                                break

                              case 220:
                                ;(t = n), (b = 42)
                            }

                            break

                          case 42:
                            47 === e &&
                              42 === D &&
                              (33 === f.charCodeAt(t + 2) && (p += f.substring(t, n + 1)),
                              (w = ''),
                              (b = 0))
                        }
                  }

                  0 === b && (g += w)
              }

              y = D
              D = e
              n++
            }

            t = p.length

            if (0 < t) {
              r = c
              if (
                0 < z &&
                ((A = I(2, p, r, d, B, x, t, h, a, h)), void 0 !== A && 0 === (p = A).length)
              )
                return H + p + G
              p = r.join(',') + '{' + p + '}'

              if (0 !== v * C) {
                2 !== v || L(p, 2) || (C = 0)

                switch (C) {
                  case 111:
                    p = p.replace(ia, ':-moz-$1') + p
                    break

                  case 112:
                    p =
                      p.replace(Q, '::-webkit-input-$1') +
                      p.replace(Q, '::-moz-$1') +
                      p.replace(Q, ':-ms-input-$1') +
                      p
                }

                C = 0
              }
            }

            return H + p + G
          }

          function X(d, c, f) {
            var h = c.trim().split(ja)
            c = h
            var a = h.length,
              k = d.length

            switch (k) {
              case 0:
              case 1:
                var b = 0

                for (d = 0 === k ? '' : d[0] + ' '; b < a; ++b) {
                  c[b] = Z(d, c[b], f, k).trim()
                }

                break

              default:
                var u = (b = 0)

                for (c = []; b < a; ++b) {
                  for (var l = 0; l < k; ++l) {
                    c[u++] = Z(d[l] + ' ', h[b], f, k).trim()
                  }
                }
            }

            return c
          }

          function Z(d, c, f) {
            var h = c.charCodeAt(0)
            33 > h && (h = (c = c.trim()).charCodeAt(0))

            switch (h) {
              case 38:
                return c.replace(F, '$1' + d.trim())

              case 58:
                switch (c.charCodeAt(1)) {
                  case 103:
                    break

                  default:
                    return d.trim() + c.replace(F, '$1' + d.trim())
                }

              default:
                if (0 < 1 * f && 0 < c.indexOf('\f'))
                  return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim())
            }

            return d + c
          }

          function P(d, c, f, h) {
            var a = d + ';',
              k = 2 * c + 3 * f + 4 * h

            if (944 === k) {
              d = a.indexOf(':', 9) + 1
              var b = a.substring(d, a.length - 1).trim()
              b = a.substring(0, d).trim() + b + ';'
              return 1 === v || (2 === v && L(b, 1)) ? '-webkit-' + b + b : b
            }

            if (0 === v || (2 === v && !L(a, 1))) return a

            switch (k) {
              case 1015:
                return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a

              case 951:
                return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a

              case 963:
                return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a

              case 1009:
                if (100 !== a.charCodeAt(4)) break

              case 969:
              case 942:
                return '-webkit-' + a + a

              case 978:
                return '-webkit-' + a + '-moz-' + a + a

              case 1019:
              case 983:
                return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a

              case 883:
                return 45 === a.charCodeAt(8) ? '-webkit-' + a + a : a

              case 932:
                if (45 === a.charCodeAt(4))
                  switch (a.charCodeAt(5)) {
                    case 103:
                      return (
                        '-webkit-box-' +
                        a.replace('-grow', '') +
                        '-webkit-' +
                        a +
                        '-ms-' +
                        a.replace('grow', 'positive') +
                        a
                      )

                    case 115:
                      return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a

                    case 98:
                      return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a
                  }
                return '-webkit-' + a + '-ms-' + a + a

              case 964:
                return '-webkit-' + a + '-ms-flex-' + a + a

              case 1023:
                if (99 !== a.charCodeAt(8)) break
                b = a
                  .substring(a.indexOf(':', 15))
                  .replace('flex-', '')
                  .replace('space-between', 'justify')
                return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a

              case 1005:
                return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a

              case 1e3:
                b = a.substring(13).trim()
                c = b.indexOf('-') + 1

                switch (b.charCodeAt(0) + b.charCodeAt(c)) {
                  case 226:
                    b = a.replace(G, 'tb')
                    break

                  case 232:
                    b = a.replace(G, 'tb-rl')
                    break

                  case 220:
                    b = a.replace(G, 'lr')
                    break

                  default:
                    return a
                }

                return '-webkit-' + a + '-ms-' + b + a

              case 1017:
                if (-1 === a.indexOf('sticky', 9)) break

              case 975:
                c = (a = d).length - 10
                b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a)
                  .substring(d.indexOf(':', 7) + 1)
                  .trim()

                switch ((k = b.charCodeAt(0) + (b.charCodeAt(7) | 0))) {
                  case 203:
                    if (111 > b.charCodeAt(8)) break

                  case 115:
                    a = a.replace(b, '-webkit-' + b) + ';' + a
                    break

                  case 207:
                  case 102:
                    a =
                      a.replace(b, '-webkit-' + (102 < k ? 'inline-' : '') + 'box') +
                      ';' +
                      a.replace(b, '-webkit-' + b) +
                      ';' +
                      a.replace(b, '-ms-' + b + 'box') +
                      ';' +
                      a
                }

                return a + ';'

              case 938:
                if (45 === a.charCodeAt(5))
                  switch (a.charCodeAt(6)) {
                    case 105:
                      return (
                        (b = a.replace('-items', '')),
                        '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a
                      )

                    case 115:
                      return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a

                    default:
                      return (
                        '-webkit-' +
                        a +
                        '-ms-flex-line-pack' +
                        a.replace('align-content', '').replace(ba, '') +
                        a
                      )
                  }
                break

              case 973:
              case 989:
                if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break

              case 931:
              case 953:
                if (!0 === la.test(d))
                  return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0)
                    ? P(d.replace('stretch', 'fill-available'), c, f, h).replace(
                        ':fill-available',
                        ':stretch'
                      )
                    : a.replace(b, '-webkit-' + b) +
                        a.replace(b, '-moz-' + b.replace('fill-', '')) +
                        a
                break

              case 962:
                if (
                  ((a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a),
                  211 === f + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10))
                )
                  return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a
            }

            return a
          }

          function L(d, c) {
            var f = d.indexOf(1 === c ? ':' : '{'),
              h = d.substring(0, 3 !== c ? f : 10)
            f = d.substring(f + 1, d.length - 1)
            return H(2 !== c ? h : h.replace(na, '$1'), f, c)
          }

          function fa(d, c) {
            var f = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2))
            return f !== c + ';' ? f.replace(oa, ' or ($1)').substring(4) : '(' + c + ')'
          }

          function I(d, c, f, h, a, k, b, u, l, q) {
            for (var m = 0, e = c, v; m < z; ++m) {
              switch ((v = R[m].call(y, d, e, f, h, a, k, b, u, l, q))) {
                case void 0:
                case !1:
                case !0:
                case null:
                  break

                default:
                  e = v
              }
            }

            if (e !== c) return e
          }

          function S(d) {
            switch (d) {
              case void 0:
              case null:
                z = R.length = 0
                break

              default:
                switch (d.constructor) {
                  case Array:
                    for (var c = 0, f = d.length; c < f; ++c) {
                      S(d[c])
                    }

                    break

                  case Function:
                    R[z++] = d
                    break

                  case Boolean:
                    Y = !!d | 0
                }
            }

            return S
          }

          function T(d) {
            d = d.prefix
            void 0 !== d &&
              ((H = null), d ? ('function' !== typeof d ? (v = 1) : ((v = 2), (H = d))) : (v = 0))
            return T
          }

          function y(d, c) {
            if (void 0 !== this && this.constructor === y) return ca(d)
            var f = d
            33 > f.charCodeAt(0) && (f = f.trim())
            U = f
            f = [U]

            if (0 < z) {
              var h = I(-1, c, f, f, B, x, 0, 0, 0, 0)
              void 0 !== h && 'string' === typeof h && (c = h)
            }

            var a = M(O, f, c, 0, 0)
            0 < z && ((h = I(-2, a, f, f, B, x, a.length, 0, 0, 0)), void 0 !== h && (a = h))
            U = ''
            C = 0
            x = B = 1
            return a
          }

          var da = /^\0+/g,
            N = /[\0\r\f]/g,
            aa = /: */g,
            ka = /zoo|gra/,
            ma = /([,: ])(transform)/g,
            ja = /,\r+?/g,
            F = /([\t\r\n ])*\f?&/g,
            ha = /@(k\w+)\s*(\S*)\s*/,
            Q = /::(place)/g,
            ia = /:(read-only)/g,
            G = /[svh]\w+-[tblr]{2}/,
            ea = /\(\s*(.*)\s*\)/g,
            oa = /([\s\S]*?);/g,
            ba = /-self|flex-/g,
            na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
            la = /stretch|:\s*\w+\-(?:conte|avail)/,
            x = 1,
            B = 1,
            C = 0,
            v = 1,
            O = [],
            R = [],
            z = 0,
            H = null,
            Y = 0,
            U = ''
          y.use = S
          y.set = T
          void 0 !== W && T(W)
          return y
        }

        /* harmony default export */ var stylis_dist_index_es = V
        //# sourceMappingURL=index.es.js.map

        // EXTERNAL MODULE: ./node_modules/stylis-rule-sheet/index.js
        var stylis_rule_sheet = __webpack_require__(5)
        var stylis_rule_sheet_default = /*#__PURE__*/ __webpack_require__.n(stylis_rule_sheet)

        // CONCATENATED MODULE: ./node_modules/create-emotion/dist/index.es.js

        var hyphenateRegex = /[A-Z]|^ms/g
        var processStyleName = Object(index_es['a' /* default */])(function(styleName) {
          return styleName.replace(hyphenateRegex, '-$&').toLowerCase()
        })
        var index_es_processStyleValue = function processStyleValue(key, value) {
          if (value == null || typeof value === 'boolean') {
            return ''
          }

          if (
            dist_index_es[key] !== 1 &&
            key.charCodeAt(1) !== 45 && // custom properties
            !isNaN(value) &&
            value !== 0
          ) {
            return value + 'px'
          }

          return value
        }

        if (false) {
          var oldProcessStyleValue, contentValues, contentValuePattern
        }

        var classnames = function classnames(args) {
          var len = args.length
          var i = 0
          var cls = ''

          for (; i < len; i++) {
            var arg = args[i]
            if (arg == null) continue
            var toAdd = void 0

            switch (typeof arg) {
              case 'boolean':
                break

              case 'function':
                if (false) {
                }

                toAdd = classnames([arg()])
                break

              case 'object': {
                if (Array.isArray(arg)) {
                  toAdd = classnames(arg)
                } else {
                  toAdd = ''

                  for (var k in arg) {
                    if (arg[k] && k) {
                      toAdd && (toAdd += ' ')
                      toAdd += k
                    }
                  }
                }

                break
              }

              default: {
                toAdd = arg
              }
            }

            if (toAdd) {
              cls && (cls += ' ')
              cls += toAdd
            }
          }

          return cls
        }
        var isBrowser = typeof document !== 'undefined'

        /*

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance
- 'polyfills' on server side

// usage

import StyleSheet from 'glamor/lib/sheet'
let styleSheet = new StyleSheet()

styleSheet.inject()
- 'injects' the stylesheet into the page (or into memory if on server)

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
        // $FlowFixMe
        function sheetForTag(tag) {
          if (tag.sheet) {
            // $FlowFixMe
            return tag.sheet
          } // this weirdness brought to you by firefox

          for (var i = 0; i < document.styleSheets.length; i++) {
            if (document.styleSheets[i].ownerNode === tag) {
              // $FlowFixMe
              return document.styleSheets[i]
            }
          }
        }

        function makeStyleTag(opts) {
          var tag = document.createElement('style')
          tag.setAttribute('data-emotion', opts.key || '')

          if (opts.nonce !== undefined) {
            tag.setAttribute('nonce', opts.nonce)
          }

          tag.appendChild(document.createTextNode('')) // $FlowFixMe
          ;(opts.container !== undefined ? opts.container : document.head).appendChild(tag)
          return tag
        }

        function _StyleSheet(options) {
          this.isSpeedy = 'production' === 'production' // the big drawback here is that the css won't be editable in devtools

          this.tags = []
          this.ctr = 0
          this.opts = options
        }

        function _inject() {
          if (this.injected) {
            throw new Error('already injected!')
          }

          this.tags[0] = makeStyleTag(this.opts)
          this.injected = true
        }

        function _speedy(bool) {
          if (this.ctr !== 0) {
            // cannot change speedy mode after inserting any rule to sheet. Either call speedy(${bool}) earlier in your app, or call flush() before speedy(${bool})
            throw new Error('cannot change speedy now')
          }

          this.isSpeedy = !!bool
        }

        function _insert(rule, sourceMap) {
          // this is the ultrafast version, works across browsers
          if (this.isSpeedy) {
            var tag = this.tags[this.tags.length - 1]
            var sheet = sheetForTag(tag)

            try {
              sheet.insertRule(rule, sheet.cssRules.length)
            } catch (e) {
              if (false) {
              }
            }
          } else {
            var _tag = makeStyleTag(this.opts)

            this.tags.push(_tag)

            _tag.appendChild(document.createTextNode(rule + (sourceMap || '')))
          }

          this.ctr++

          if (this.ctr % 65000 === 0) {
            this.tags.push(makeStyleTag(this.opts))
          }
        }

        function _ref(tag) {
          return tag.parentNode.removeChild(tag)
        }

        function _flush() {
          // $FlowFixMe
          this.tags.forEach(_ref)
          this.tags = []
          this.ctr = 0 // todo - look for remnants in document.styleSheets

          this.injected = false
        }

        var StyleSheet =
          /*#__PURE__*/
          (function() {
            var _proto = _StyleSheet.prototype
            _proto.inject = _inject
            _proto.speedy = _speedy
            _proto.insert = _insert
            _proto.flush = _flush
            return _StyleSheet
          })()

        function createEmotion(context, options) {
          if (context.__SECRET_EMOTION__ !== undefined) {
            return context.__SECRET_EMOTION__
          }

          if (options === undefined) options = {}
          var key = options.key || 'css'

          if (false) {
          }

          var current

          function insertRule(rule) {
            current += rule

            if (isBrowser) {
              sheet.insert(rule, currentSourceMap)
            }
          }

          var insertionPlugin = stylis_rule_sheet_default()(insertRule)
          var stylisOptions

          if (options.prefix !== undefined) {
            stylisOptions = {
              prefix: options.prefix,
            }
          }

          var caches = {
            registered: {},
            inserted: {},
            nonce: options.nonce,
            key: key,
          }
          var sheet = new StyleSheet(options)

          if (isBrowser) {
            // 🚀
            sheet.inject()
          }

          var stylis = new stylis_dist_index_es(stylisOptions)
          stylis.use(options.stylisPlugins)(insertionPlugin)
          var currentSourceMap = ''

          function handleInterpolation(interpolation, couldBeSelectorInterpolation) {
            if (interpolation == null) {
              return ''
            }

            switch (typeof interpolation) {
              case 'boolean':
                return ''

              case 'function':
                if (interpolation.__emotion_styles !== undefined) {
                  var selector = interpolation.toString()

                  if (selector === 'NO_COMPONENT_SELECTOR' && 'production' !== 'production') {
                    throw new Error(
                      'Component selectors can only be used in conjunction with babel-plugin-emotion.'
                    )
                  }

                  return selector
                }

                if (this === undefined && 'production' !== 'production') {
                  console.error(
                    'Interpolating functions in css calls is deprecated and will be removed in the next major version of Emotion.\n' +
                      'If you want to have a css call based on props, create a function that returns a css call like this\n' +
                      'let dynamicStyle = (props) => css`color: ${props.color}`\n' +
                      'It can be called directly with props or interpolated in a styled call like this\n' +
                      "let SomeComponent = styled('div')`${dynamicStyle}`"
                  )
                }

                return handleInterpolation.call(
                  this,
                  this === undefined
                    ? interpolation() // $FlowFixMe
                    : interpolation(this.mergedProps, this.context),
                  couldBeSelectorInterpolation
                )

              case 'object':
                return createStringFromObject.call(this, interpolation)

              default:
                var cached = caches.registered[interpolation]
                return couldBeSelectorInterpolation === false && cached !== undefined
                  ? cached
                  : interpolation
            }
          }

          var objectToStringCache = new WeakMap()

          function createStringFromObject(obj) {
            if (objectToStringCache.has(obj)) {
              // $FlowFixMe
              return objectToStringCache.get(obj)
            }

            var string = ''

            function _ref(interpolation) {
              string += handleInterpolation.call(this, interpolation, false)
            }

            function _ref3(key) {
              function _ref2(value) {
                string += processStyleName(key) + ':' + index_es_processStyleValue(key, value) + ';'
              }

              if (typeof obj[key] !== 'object') {
                if (caches.registered[obj[key]] !== undefined) {
                  string += key + '{' + caches.registered[obj[key]] + '}'
                } else {
                  string +=
                    processStyleName(key) + ':' + index_es_processStyleValue(key, obj[key]) + ';'
                }
              } else {
                if (key === 'NO_COMPONENT_SELECTOR' && 'production' !== 'production') {
                  throw new Error(
                    'Component selectors can only be used in conjunction with babel-plugin-emotion.'
                  )
                }

                if (
                  Array.isArray(obj[key]) &&
                  typeof obj[key][0] === 'string' &&
                  caches.registered[obj[key][0]] === undefined
                ) {
                  obj[key].forEach(_ref2)
                } else {
                  string += key + '{' + handleInterpolation.call(this, obj[key], false) + '}'
                }
              }
            }

            if (Array.isArray(obj)) {
              obj.forEach(_ref, this)
            } else {
              Object.keys(obj).forEach(_ref3, this)
            }

            objectToStringCache.set(obj, string)
            return string
          }

          var name
          var stylesWithLabel
          var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g

          var createStyles = function createStyles(strings) {
            var stringMode = true
            var styles = ''
            var identifierName = ''

            if (strings == null || strings.raw === undefined) {
              stringMode = false
              styles += handleInterpolation.call(this, strings, false)
            } else {
              styles += strings[0]
            }

            for (
              var _len = arguments.length,
                interpolations = new Array(_len > 1 ? _len - 1 : 0),
                _key = 1;
              _key < _len;
              _key++
            ) {
              interpolations[_key - 1] = arguments[_key]
            }

            interpolations.forEach(function(interpolation, i) {
              styles += handleInterpolation.call(
                this,
                interpolation,
                styles.charCodeAt(styles.length - 1) === 46 // .
              )

              if (stringMode === true && strings[i + 1] !== undefined) {
                styles += strings[i + 1]
              }
            }, this)
            stylesWithLabel = styles
            styles = styles.replace(labelPattern, function(match, p1) {
              identifierName += '-' + p1
              return ''
            })
            name = hash_dist_index_es(styles + identifierName) + identifierName
            return styles
          }

          if (false) {
            var oldStylis, sourceMapRegEx
          }

          function insert(scope, styles) {
            if (caches.inserted[name] === undefined) {
              current = ''
              stylis(scope, styles)
              caches.inserted[name] = current
            }
          }

          var css = function css() {
            var styles = createStyles.apply(this, arguments)
            var selector = key + '-' + name

            if (caches.registered[selector] === undefined) {
              caches.registered[selector] = stylesWithLabel
            }

            insert('.' + selector, styles)
            return selector
          }

          var keyframes = function keyframes() {
            var styles = createStyles.apply(this, arguments)
            var animation = 'animation-' + name
            insert('', '@keyframes ' + animation + '{' + styles + '}')
            return animation
          }

          var injectGlobal = function injectGlobal() {
            var styles = createStyles.apply(this, arguments)
            insert('', styles)
          }

          function getRegisteredStyles(registeredStyles, classNames) {
            var rawClassName = ''
            classNames.split(' ').forEach(function(className) {
              if (caches.registered[className] !== undefined) {
                registeredStyles.push(className)
              } else {
                rawClassName += className + ' '
              }
            })
            return rawClassName
          }

          function merge(className, sourceMap) {
            var registeredStyles = []
            var rawClassName = getRegisteredStyles(registeredStyles, className)

            if (registeredStyles.length < 2) {
              return className
            }

            return rawClassName + css(registeredStyles, sourceMap)
          }

          function cx() {
            for (
              var _len2 = arguments.length, classNames = new Array(_len2), _key2 = 0;
              _key2 < _len2;
              _key2++
            ) {
              classNames[_key2] = arguments[_key2]
            }

            return merge(classnames(classNames))
          }

          function hydrateSingleId(id) {
            caches.inserted[id] = true
          }

          function hydrate(ids) {
            ids.forEach(hydrateSingleId)
          }

          function flush() {
            if (isBrowser) {
              sheet.flush()
              sheet.inject()
            }

            caches.inserted = {}
            caches.registered = {}
          }

          function _ref4(node) {
            // $FlowFixMe
            sheet.tags[0].parentNode.insertBefore(node, sheet.tags[0]) // $FlowFixMe

            node
              .getAttribute('data-emotion-' + key)
              .split(' ')
              .forEach(hydrateSingleId)
          }

          if (isBrowser) {
            var chunks = document.querySelectorAll('[data-emotion-' + key + ']')
            Array.prototype.forEach.call(chunks, _ref4)
          }

          var emotion = {
            flush: flush,
            hydrate: hydrate,
            cx: cx,
            merge: merge,
            getRegisteredStyles: getRegisteredStyles,
            injectGlobal: injectGlobal,
            keyframes: keyframes,
            css: css,
            sheet: sheet,
            caches: caches,
          }
          context.__SECRET_EMOTION__ = emotion
          return emotion
        }

        /* harmony default export */ var create_emotion_dist_index_es = (__webpack_exports__[
          'a'
        ] = createEmotion)
        //# sourceMappingURL=index.es.js.map

        /***/
      },
      /* 4 */
      /***/ function(module, exports, __webpack_require__) {
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        if (false) {
          var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE
        } else {
          // By explicitly using `prop-types` you are opting into new production behavior.
          // http://fb.me/prop-types-in-prod
          module.exports = __webpack_require__(10)()
        }

        /***/
      },
      /* 5 */
      /***/ function(module, exports, __webpack_require__) {
        ;(function(factory) {
          true ? (module['exports'] = factory()) : undefined
        })(function() {
          'use strict'

          return function(insertRule) {
            var delimiter = '/*|*/'
            var needle = delimiter + '}'

            function toSheet(block) {
              if (block)
                try {
                  insertRule(block + '}')
                } catch (e) {}
            }

            return function ruleSheet(
              context,
              content,
              selectors,
              parents,
              line,
              column,
              length,
              ns,
              depth,
              at
            ) {
              switch (context) {
                // property
                case 1:
                  // @import
                  if (depth === 0 && content.charCodeAt(0) === 64)
                    return insertRule(content + ';'), ''
                  break
                // selector
                case 2:
                  if (ns === 0) return content + delimiter
                  break
                // at-rule
                case 3:
                  switch (ns) {
                    // @font-face, @page
                    case 102:
                    case 112:
                      return insertRule(selectors[0] + content), ''
                    default:
                      return content + (at === 0 ? delimiter : '')
                  }
                case -2:
                  content.split(needle).forEach(toSheet)
              }
            }
          }
        })

        /***/
      },
      /* 6 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)

        // EXTERNAL MODULE: external "React"
        var external_React_ = __webpack_require__(2)
        var external_React_default = /*#__PURE__*/ __webpack_require__.n(external_React_)

        // EXTERNAL MODULE: ./node_modules/emotion/dist/index.es.js
        var index_es = __webpack_require__(0)

        // EXTERNAL MODULE: ./node_modules/prop-types/index.js
        var prop_types = __webpack_require__(4)
        var prop_types_default = /*#__PURE__*/ __webpack_require__.n(prop_types)

        // EXTERNAL MODULE: ./node_modules/@emotion/memoize/dist/index.es.js
        var dist_index_es = __webpack_require__(1)

        // CONCATENATED MODULE: ./node_modules/@emotion/is-prop-valid/dist/index.es.js

        var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|accept|acceptCharset|accessKey|action|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan)|(on[A-Z].*)|((data|aria)-.*))$/
        var index = Object(dist_index_es['a' /* default */])(
          RegExp.prototype.test.bind(reactPropsRegex)
        )

        /* harmony default export */ var is_prop_valid_dist_index_es = index
        //# sourceMappingURL=index.es.js.map

        // CONCATENATED MODULE: ./node_modules/create-emotion-styled/dist/index.es.js

        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype)
          subClass.prototype.constructor = subClass
          subClass.__proto__ = superClass
        }

        var channel = '__EMOTION_THEMING__'

        // https://github.com/styled-components/styled-components/blob/e05b3fe247e9d956bcde786cec376e32afb85bca/src/utils/create-broadcast.js

        var _contextTypes
        var contextTypes = ((_contextTypes = {}),
        (_contextTypes[channel] = prop_types_default.a.object),
        _contextTypes)

        function setTheme(theme) {
          this.setState({
            theme: theme,
          })
        }
        var testPickPropsOnStringTag = is_prop_valid_dist_index_es
        var testPickPropsOnComponent = function testPickPropsOnComponent(key) {
          return key !== 'theme' && key !== 'innerRef'
        }
        var testAlwaysTrue = function testAlwaysTrue() {
          return true
        }
        var pickAssign = function pickAssign(testFn, target) {
          var i = 2
          var length = arguments.length

          for (; i < length; i++) {
            var source = arguments[i]

            var _key = void 0

            for (_key in source) {
              if (testFn(_key)) {
                target[_key] = source[_key]
              }
            }
          }

          return target
        }

        function _componentWillMount() {
          if (this.context[channel] !== undefined) {
            this.unsubscribe = this.context[channel].subscribe(setTheme.bind(this))
          }
        }

        function _componentWillUnmount() {
          if (this.unsubscribe !== undefined) {
            this.context[channel].unsubscribe(this.unsubscribe)
          }
        }

        function _get$1(target, property) {
          switch (property) {
            // react-hot-loader tries to access this stuff
            case '__proto__':
            case 'name':
            case 'prototype':
            case 'displayName': {
              return target[property]
            }

            default: {
              throw new Error(
                "You're trying to use the styled shorthand without babel-plugin-emotion." +
                  ("\nPlease install and setup babel-plugin-emotion or use the function call syntax(`styled('" +
                    property +
                    "')` instead of `styled." +
                    property +
                    '`)')
              )
            }
          }
        }

        function createEmotionStyled(emotion, view) {
          var _createStyled = function createStyled(tag, options) {
            if (false) {
            }

            var staticClassName
            var identifierName
            var stableClassName
            var shouldForwardProp

            function _ref(propName) {
              return (
                tag.__emotion_forwardProp(propName) && options.shouldForwardProp(propName) // $FlowFixMe
              )
            }

            if (options !== undefined) {
              staticClassName = options.e
              identifierName = options.label
              stableClassName = options.target
              shouldForwardProp =
                tag.__emotion_forwardProp && options.shouldForwardProp
                  ? _ref
                  : options.shouldForwardProp
            }

            var isReal = tag.__emotion_real === tag
            var baseTag =
              staticClassName === undefined ? (isReal && tag.__emotion_base) || tag : tag

            if (typeof shouldForwardProp !== 'function') {
              shouldForwardProp =
                typeof baseTag === 'string' && baseTag.charAt(0) === baseTag.charAt(0).toLowerCase()
                  ? testPickPropsOnStringTag
                  : testPickPropsOnComponent
            }

            function _value() {
              if (false) {
              } // $FlowFixMe

              return '.' + stableClassName
            }

            return function() {
              var args = arguments
              var styles =
                isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : []

              if (identifierName !== undefined) {
                styles.push('label:' + identifierName + ';')
              }

              if (staticClassName === undefined) {
                if (args[0] == null || args[0].raw === undefined) {
                  styles.push.apply(styles, args)
                } else {
                  styles.push(args[0][0])
                  var len = args.length
                  var i = 1

                  for (; i < len; i++) {
                    styles.push(args[i], args[0][i])
                  }
                }
              }

              function _render() {
                var props = this.props,
                  state = this.state
                this.mergedProps = pickAssign(testAlwaysTrue, {}, props, {
                  theme: (state !== null && state.theme) || props.theme || {},
                })
                var className = ''
                var classInterpolations = []

                if (props.className) {
                  if (staticClassName === undefined) {
                    className += emotion.getRegisteredStyles(classInterpolations, props.className)
                  } else {
                    className += props.className + ' '
                  }
                }

                if (staticClassName === undefined) {
                  className += emotion.css.apply(this, styles.concat(classInterpolations))
                } else {
                  className += staticClassName
                }

                if (stableClassName !== undefined) {
                  className += ' ' + stableClassName
                }

                return view.createElement(
                  baseTag, // $FlowFixMe
                  pickAssign(shouldForwardProp, {}, props, {
                    className: className,
                    ref: props.innerRef,
                  })
                )
              }

              var Styled =
                /*#__PURE__*/
                (function(_view$Component) {
                  _inheritsLoose(Styled, _view$Component)

                  function Styled() {
                    return _view$Component.apply(this, arguments) || this
                  }

                  var _proto = Styled.prototype
                  _proto.componentWillMount = _componentWillMount
                  _proto.componentWillUnmount = _componentWillUnmount
                  _proto.render = _render
                  return Styled
                })(view.Component)

              Styled.displayName =
                identifierName !== undefined
                  ? identifierName
                  : 'Styled(' +
                    (typeof baseTag === 'string'
                      ? baseTag
                      : baseTag.displayName || baseTag.name || 'Component') +
                    ')'

              if (tag.defaultProps !== undefined) {
                // $FlowFixMe
                Styled.defaultProps = tag.defaultProps
              }

              Styled.contextTypes = contextTypes
              Styled.__emotion_styles = styles
              Styled.__emotion_base = baseTag
              Styled.__emotion_real = Styled
              Styled.__emotion_forwardProp = shouldForwardProp
              Object.defineProperty(Styled, 'toString', {
                enumerable: false,
                value: _value,
              })

              Styled.withComponent = function(nextTag, nextOptions) {
                return _createStyled(
                  nextTag,
                  nextOptions !== undefined // $FlowFixMe
                    ? pickAssign(testAlwaysTrue, {}, options, nextOptions)
                    : options
                ).apply(void 0, styles)
              }

              return Styled
            }
          }

          if (false) {
          }

          return _createStyled
        }

        /* harmony default export */ var create_emotion_styled_dist_index_es = createEmotionStyled
        //# sourceMappingURL=index.es.js.map

        // CONCATENATED MODULE: ./node_modules/react-emotion/dist/index.es.js
        /* concated harmony reexport */ __webpack_require__.d(
          __webpack_exports__,
          'flush',
          function() {
            return index_es['flush']
          }
        )
        /* concated harmony reexport */ __webpack_require__.d(
          __webpack_exports__,
          'hydrate',
          function() {
            return index_es['hydrate']
          }
        )
        /* concated harmony reexport */ __webpack_require__.d(
          __webpack_exports__,
          'cx',
          function() {
            return index_es['cx']
          }
        )
        /* concated harmony reexport */ __webpack_require__.d(
          __webpack_exports__,
          'merge',
          function() {
            return index_es['merge']
          }
        )
        /* concated harmony reexport */ __webpack_require__.d(
          __webpack_exports__,
          'getRegisteredStyles',
          function() {
            return index_es['getRegisteredStyles']
          }
        )
        /* concated harmony reexport */ __webpack_require__.d(
          __webpack_exports__,
          'injectGlobal',
          function() {
            return index_es['injectGlobal']
          }
        )
        /* concated harmony reexport */ __webpack_require__.d(
          __webpack_exports__,
          'keyframes',
          function() {
            return index_es['keyframes']
          }
        )
        /* concated harmony reexport */ __webpack_require__.d(
          __webpack_exports__,
          'css',
          function() {
            return index_es['css']
          }
        )
        /* concated harmony reexport */ __webpack_require__.d(
          __webpack_exports__,
          'sheet',
          function() {
            return index_es['sheet']
          }
        )
        /* concated harmony reexport */ __webpack_require__.d(
          __webpack_exports__,
          'caches',
          function() {
            return index_es['caches']
          }
        )

        var index_es_index = create_emotion_styled_dist_index_es(index_es, external_React_default.a)

        /* harmony default export */ var react_emotion_dist_index_es = (__webpack_exports__[
          'default'
        ] = index_es_index)
        //# sourceMappingURL=index.es.js.map

        /***/
      },
      /* 7 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'

        module.exports = ReactPropTypesSecret

        /***/
      },
      /* 8 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         */

        /**
         * Use invariant() to assert state which your program assumes to be true.
         *
         * Provide sprintf-style format (only %s is supported) and arguments
         * to provide information about what broke and what you were
         * expecting.
         *
         * The invariant message will be stripped in production, but the invariant
         * will remain to ensure logic does not differ in production.
         */

        var validateFormat = function validateFormat(format) {}

        if (false) {
        }

        function invariant(condition, format, a, b, c, d, e, f) {
          validateFormat(format)

          if (!condition) {
            var error
            if (format === undefined) {
              error = new Error(
                'Minified exception occurred; use the non-minified dev environment ' +
                  'for the full error message and additional helpful warnings.'
              )
            } else {
              var args = [a, b, c, d, e, f]
              var argIndex = 0
              error = new Error(
                format.replace(/%s/g, function() {
                  return args[argIndex++]
                })
              )
              error.name = 'Invariant Violation'
            }

            error.framesToPop = 1 // we don't care about invariant's own frame
            throw error
          }
        }

        module.exports = invariant

        /***/
      },
      /* 9 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */

        function makeEmptyFunction(arg) {
          return function() {
            return arg
          }
        }

        /**
         * This function accepts and discards inputs; it has no side effects. This is
         * primarily useful idiomatically for overridable function endpoints which
         * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
         */
        var emptyFunction = function emptyFunction() {}

        emptyFunction.thatReturns = makeEmptyFunction
        emptyFunction.thatReturnsFalse = makeEmptyFunction(false)
        emptyFunction.thatReturnsTrue = makeEmptyFunction(true)
        emptyFunction.thatReturnsNull = makeEmptyFunction(null)
        emptyFunction.thatReturnsThis = function() {
          return this
        }
        emptyFunction.thatReturnsArgument = function(arg) {
          return arg
        }

        module.exports = emptyFunction

        /***/
      },
      /* 10 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var emptyFunction = __webpack_require__(9)
        var invariant = __webpack_require__(8)
        var ReactPropTypesSecret = __webpack_require__(7)

        module.exports = function() {
          function shim(props, propName, componentName, location, propFullName, secret) {
            if (secret === ReactPropTypesSecret) {
              // It is still safe when called from React.
              return
            }
            invariant(
              false,
              'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                'Use PropTypes.checkPropTypes() to call them. ' +
                'Read more at http://fb.me/use-check-prop-types'
            )
          }
          shim.isRequired = shim
          function getShim() {
            return shim
          }
          // Important!
          // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
          var ReactPropTypes = {
            array: shim,
            bool: shim,
            func: shim,
            number: shim,
            object: shim,
            string: shim,
            symbol: shim,

            any: shim,
            arrayOf: getShim,
            element: shim,
            instanceOf: getShim,
            node: shim,
            objectOf: getShim,
            oneOf: getShim,
            oneOfType: getShim,
            shape: getShim,
            exact: getShim,
          }

          ReactPropTypes.checkPropTypes = emptyFunction
          ReactPropTypes.PropTypes = ReactPropTypes

          return ReactPropTypes
        }

        /***/
      },
      /* 11 */
      /***/ function(module, exports) {
        var g

        // This works in non-strict mode
        g = (function() {
          return this
        })()

        try {
          // This works if eval is allowed (see CSP)
          g = g || Function('return this')() || (1, eval)('this')
        } catch (e) {
          // This works if the window reference is available
          if (typeof window === 'object') g = window
        }

        // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}

        module.exports = g

        /***/
      },
      /* 12 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        exports.CropArea = exports.Img = exports.Container = undefined

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i]
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key]
                }
              }
            }
            return target
          }

        var _reactEmotion = __webpack_require__(6)

        var _reactEmotion2 = _interopRequireDefault(_reactEmotion)

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        var Container = (exports.Container = (0, _reactEmotion2.default)('div')(
          {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden',
            userSelect: 'none',
            touchAction: 'none',
            cursor: 'move',
          },
          function(_ref) {
            var containerStyle = _ref.containerStyle
            return _extends({}, containerStyle)
          }
        ))

        var Img = (exports.Img = (0, _reactEmotion2.default)('img')(
          {
            maxWidth: '100%',
            maxHeight: '100%',
            margin: 'auto',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            willChange: 'transform', // this improves performances and prevent painting issues on iOS Chrome
          },
          function(_ref2) {
            var imageStyle = _ref2.imageStyle
            return _extends({}, imageStyle)
          }
        ))

        var lineBorder = '1px solid rgba(255, 255, 255, 0.5)'
        var cropperLines = {
          content: '" "',
          boxSizing: 'border-box',
          position: 'absolute',
          border: lineBorder,
        }
        var cropperArea = {
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          border: lineBorder,
          boxSizing: 'border-box',
          boxShadow: '0 0 0 9999em',
          color: 'rgba(0,0,0,0.5)',
          overflow: 'hidden',
        }
        var gridLines = {
          '&::before': _extends({}, cropperLines, {
            top: 0,
            bottom: 0,
            left: '33.33%',
            right: '33.33%',
            borderTop: 0,
            borderBottom: 0,
          }),
          '&::after': _extends({}, cropperLines, {
            top: '33.33%',
            bottom: '33.33%',
            left: 0,
            right: 0,
            borderLeft: 0,
            borderRight: 0,
          }),
        }
        var roundShape = {
          borderRadius: '50%',
        }

        var CropArea = (exports.CropArea = (0, _reactEmotion2.default)('div')({}, function(_ref3) {
          var cropShape = _ref3.cropShape,
            showGrid = _ref3.showGrid,
            cropAreaStyle = _ref3.cropAreaStyle
          return _extends(
            {},
            (function() {
              switch (cropShape) {
                case 'round':
                  return _extends({}, cropperArea, roundShape)
                case 'rect':
                default:
                  return cropperArea
              }
            })(),
            showGrid ? gridLines : {},
            cropAreaStyle
          )
        }))

        /***/
      },
      /* 13 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })
        exports.getCropSize = getCropSize
        exports.restrictPosition = restrictPosition
        exports.getDistanceBetweenPoints = getDistanceBetweenPoints
        exports.computeCroppedArea = computeCroppedArea
        exports.getCenter = getCenter
        /**
         * Compute the dimension of the crop area based on image size and aspect ratio
         * @param {number} imgWidth width of the src image in pixels
         * @param {number} imgHeight height of the src image in pixels
         * @param {number} aspect aspect ratio of the crop
         */
        function getCropSize(imgWidth, imgHeight, aspect) {
          if (imgWidth >= imgHeight * aspect) {
            return {
              width: imgHeight * aspect,
              height: imgHeight,
            }
          }
          return {
            width: imgWidth,
            height: imgWidth / aspect,
          }
        }

        /**
         * Ensure a new image position stays in the crop area.
         * @param {{x: number, y number}} position new x/y position requested for the image
         * @param {{width: number, height: number}} imageSize width/height of the src image
         * @param {{width: number, height: number}} cropSize width/height of the crop area
         * @param {number} zoom zoom value
         * @returns {{x: number, y number}}
         */
        function restrictPosition(position, imageSize, cropSize, zoom) {
          return {
            x: restrictPositionCoord(position.x, imageSize.width, cropSize.width, zoom),
            y: restrictPositionCoord(position.y, imageSize.height, cropSize.height, zoom),
          }
        }

        function restrictPositionCoord(position, imageSize, cropSize, zoom) {
          var maxPosition = (imageSize * zoom) / 2 - cropSize / 2
          return Math.min(maxPosition, Math.max(position, -maxPosition))
        }

        function getDistanceBetweenPoints(pointA, pointB) {
          return Math.sqrt(Math.pow(pointA.y - pointB.y, 2) + Math.pow(pointA.x - pointB.x, 2))
        }

        /**
         * Compute the output cropped area of the image in percentages and pixels.
         * x/y are the top-left coordinates on the src image
         * @param HTMLImgElement image - the image element
         * @param {{x: number, y number}} crop x/y position of the current center of the image
         * @param {{width: number, height: number, naturalWidth: number, naturelHeight: number}} imageSize width/height of the src image (default is size on the screen, natural is the original size)
         * @param {{width: number, height: number}} cropSize width/height of the crop area
         * @param {number} zoom zoom value
         */
        function computeCroppedArea(image, crop, imgSize, cropSize, zoom) {
          var croppedAreaPercentages = {
            x: limitArea(
              100,
              (((imgSize.width - cropSize.width / zoom) / 2 - crop.x / zoom) / imgSize.width) * 100
            ),
            y: limitArea(
              100,
              (((imgSize.height - cropSize.height / zoom) / 2 - crop.y / zoom) / imgSize.height) *
                100
            ),
            width: limitArea(100, ((cropSize.width / imgSize.width) * 100) / zoom),
            height: limitArea(100, ((cropSize.height / imgSize.height) * 100) / zoom),
            croppedX: false,
            croppedY: false,
          }

          if (zoom < 1) {
            var _image$getBoundingCli = image.getBoundingClientRect(),
              width = _image$getBoundingCli.width,
              height = _image$getBoundingCli.height

            var imageWidth = width
            var imageHeight = height

            var leftWidthSpace = (cropSize.width - imageWidth) / 2
            var leftHeightSpace = (cropSize.height - imageHeight) / 2

            if (imageWidth < cropSize.width) {
              // Image width is smaller then the field it is placed in
              croppedAreaPercentages.x = leftWidthSpace
              croppedAreaPercentages.croppedX = true
            }

            if (imageHeight < cropSize.height) {
              // Image height is smaller then the field it is placed in
              croppedAreaPercentages.y = leftHeightSpace
              croppedAreaPercentages.croppedY = true
            }
          }

          var croppedAreaPixels = {
            x: limitArea(
              imgSize.naturalWidth,
              (croppedAreaPercentages.x * imgSize.naturalWidth) / 100
            ),
            y: limitArea(
              imgSize.naturalHeight,
              (croppedAreaPercentages.y * imgSize.naturalHeight) / 100
            ),
            width: limitArea(
              imgSize.naturalWidth,
              (croppedAreaPercentages.width * imgSize.naturalWidth) / 100
            ),
            height: limitArea(
              imgSize.naturalHeight,
              (croppedAreaPercentages.height * imgSize.naturalHeight) / 100
            ),
            croppedX: croppedAreaPercentages.croppedX,
            croppedY: croppedAreaPercentages.croppedY,
          }
          return {
            croppedAreaPercentages: croppedAreaPercentages,
            croppedAreaPixels: croppedAreaPixels,
          }
        }

        /**
         * Ensure the returned value is between 0 and max
         * @param {number} max
         * @param {number} value
         */
        function limitArea(max, value) {
          return Math.min(max, Math.max(0, value))
        }

        /**
         * Return the point that is the center of point a and b
         * @param {{x: number, y: number}} a
         * @param {{x: number, y: number}} b
         */
        function getCenter(a, b) {
          return {
            x: (b.x + a.x) / 2,
            y: (b.y + a.y) / 2,
          }
        }

        /***/
      },
      /* 14 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true,
        })

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

        var _react = __webpack_require__(2)

        var _react2 = _interopRequireDefault(_react)

        var _helpers = __webpack_require__(13)

        var _styles = __webpack_require__(12)

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
                  var _this$image$getBoundi = _this.image.getBoundingClientRect(),
                    width = _this$image$getBoundi.width,
                    height = _this$image$getBoundi.height

                  var imageStyleWidth = parseFloat(_this.props.style.imageStyle.width)
                  var imageStyleHeight = parseFloat(_this.props.style.imageStyle.height)

                  var boundingWidth = Math.max(window.innerWidth / 2, 770)
                  var boundingHeight = Math.max(window.innerHeight, 675)

                  if (window.innerWidth - 50 <= boundingWidth) {
                    boundingWidth = window.innerWidth - 50
                  }

                  if (window.innerHeight - 125 <= boundingHeight) {
                    boundingHeight = window.innerHeight - 125
                  }

                  var imageAspect = imageStyleWidth / imageStyleHeight
                  if (imageStyleWidth >= imageStyleHeight) {
                    boundingHeight = boundingWidth / imageAspect
                  } else {
                    boundingWidth = boundingHeight * imageAspect
                  }

                  _this.imageSize = {
                    width: boundingWidth,
                    height: boundingHeight,
                    naturalWidth: _this.image.naturalWidth,
                    naturalHeight: _this.image.naturalHeight,
                  }
                  var cropSize = (0, _helpers.getCropSize)(
                    boundingWidth,
                    boundingHeight,
                    _this.props.aspect
                  )
                  _this.setState({ cropSize: cropSize }, _this.recomputeCropPosition)
                }
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
                      transform:
                        'translate(' + patchedX + 'px, ' + patchedY + 'px) scale(' + zoom + ')',
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

        /***/
      },
      /******/
    ]
  )
})
