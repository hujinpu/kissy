/**
 * @module mods
 * @author lifesinger@gmail.com
 */
(function(S) {

    var map = {
        core: {
            path: 'packages/core-min.js',
            charset: 'utf-8'
        }
    };

    S.each(['sizzle', 'datalazyload', 'flash', 'switchable', 'suggest'], function(modName) {
        map[modName] = {
            path: modName + '/' + modName + '-pkg-min.js',
            requires: ['core'],
            charset: 'utf-8'
        };
    });

    S.add(map);

})(KISSY);

/**
 * NOTES:
 *
 *  2010/08/16 �񲮣�
 *   - ����ʵ�������ȣ���ֹ������С���û������Ĳ����㡣
 *
 */