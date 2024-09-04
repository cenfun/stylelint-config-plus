<template>
    <div></div>
</template>
<style lang="scss">
@use "sass:math";
$a: 100;
$b: 10;

$v: math.div($a, $b);

.my-class {
    position: absolute;
    width: 10px;

    .sub {
        display: block;
        font-size: 12px;
    }
}
</style>