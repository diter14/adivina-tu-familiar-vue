String.prototype.replaceAt = function() {
    var rlen = arguments[2] == null ? 1 : arguments[2]
    return (
        this.substring(0, arguments[0]) +
        arguments[1] +
        this.substring(arguments[0] + rlen)
    )
}
