<template>
    <div></div>
</template>
<style lang="scss">
$a: 100;
$b: 10;

$v: math.div($a, $b);

@use "sass:math";

.my-class {
    position: absolute;
    width: 10px;

    .sub {
        display: block;
        font-size: 12px;
    }
}
</style>