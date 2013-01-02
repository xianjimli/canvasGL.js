/**
 * Created with JetBrains WebStorm.
 * User: DEEV
 * Date: 02.01.13
 * Time: 10:18
 * To change this template use File | Settings | File Templates.
 */


// SX  0  0  0      0  1  2  3
//  0 SY  0  0      4  5  6  7
//  0  0 SZ  0      8  9 10 11
// TX TY TZ  1     12 13 14 15

function mat44Make()
{
    return [ 1, 0, 0, 0,
             0, 1, 0, 0,
             0, 0, 1, 0,
             0, 0, 0, 1 ];
}

function mat44Identity(m)
{
    m[ 0] = 1; m[ 1] = m[ 2] = m[ 3] = 0;
    m[ 5] = 1; m[ 4] = m[ 6] = m[ 7] = 0;
    m[10] = 1; m[ 8] = m[ 9] = m[11] = 0;
    m[15] = 1; m[12] = m[13] = m[14] = 0;

    return m;
}

function mat44Scale(sx,sy,sz)
{
    var m = mat44Make();

    m[0]  = sx;
    m[5]  = sy;
    m[10] = sz;

    return m;

}

function mat44Translate(tx,ty,tz)
{
    var m = mat44Make();

    m[12] = tx;
    m[13] = ty;
    m[14] = tz;

    return m;
}

function mat44RotationZ(a)
{
    var m = mat44Make();

    var sin = Math.sin(a),
        cos = Math.cos(a);

    m[0] = cos;
    m[1] = sin;
    m[4] = -sin;
    m[5] = cos;

    return m;
}

function mat44Copy(m)
{
    var d = mat44Make();

    d[ 0] = m[ 0];d[ 1] = m[ 1];d[ 2] = m[ 2];d[ 3] = m[ 3];
    d[ 4] = m[ 4];d[ 5] = m[ 5];d[ 6] = m[ 6];d[ 7] = m[ 7];
    d[ 8] = m[ 8];d[ 9] = m[ 9];d[10] = m[10];d[11] = m[11];
    d[12] = m[12];d[13] = m[13];d[14] = m[14];d[15] = m[15];

    return d;
};

function mat44MultPre(m0,m1)
{
    var m = mat44Make();

    var m000 = m0[ 0],m001 = m0[ 1],m002 = m0[ 2],m003 = m0[ 3],
        m004 = m0[ 4],m005 = m0[ 5],m006 = m0[ 6],m007 = m0[ 7],
        m008 = m0[ 8],m009 = m0[ 9],m010 = m0[10],m011 = m0[11],
        m012 = m0[12],m013 = m0[13],m014 = m0[14],m015 = m0[15];

    var m100 = m1[ 0],m101 = m1[ 1],m102 = m1[ 2],m103 = m1[ 3],
        m104 = m1[ 4],m105 = m1[ 5],m106 = m1[ 6],m107 = m1[ 7],
        m108 = m1[ 8],m109 = m1[ 9],m110 = m1[10],m111 = m1[11],
        m112 = m1[12],m113 = m1[13],m114 = m1[14],m115 = m1[15];

    m[ 0] = m000*m100 + m001*m104 + m002*m108 + m003*m112;
    m[ 1] = m000*m101 + m001*m105 + m002*m109 + m003*m113;
    m[ 2] = m000*m102 + m001*m106 + m002*m110 + m003*m114;
    m[ 3] = m000*m103 + m001*m107 + m002*m111 + m003*m115;

    m[ 4] = m004*m100 + m005*m104 + m006*m108 + m007*m112;
    m[ 5] = m004*m101 + m005*m105 + m006*m109 + m007*m113;
    m[ 6] = m004*m102 + m005*m106 + m006*m110 + m007*m114;
    m[ 7] = m004*m103 + m005*m107 + m006*m111 + m007*m115;

    m[ 8] = m008*m100 + m009*m104 + m010*m108 + m011*m112;
    m[ 9] = m008*m101 + m009*m105 + m010*m109 + m011*m113;
    m[10] = m008*m102 + m009*m106 + m010*m110 + m011*m114;
    m[11] = m008*m103 + m009*m107 + m010*m111 + m011*m115;

    m[12] = m012*m100 + m013*m104 + m014*m108 + m015*m112;
    m[13] = m012*m101 + m013*m105 + m014*m109 + m015*m113;
    m[14] = m012*m102 + m013*m106 + m014*m110 + m015*m114;
    m[15] = m012*m103 + m013*m107 + m014*m111 + m015*m115;

    return m;
}

function mat44Mult(m0,m1)
{
    return mat44MultPre(m0,m1);
}

function mat44MultPost(m0,m1)
{
    return mat44MultPre(m1,m0);
}