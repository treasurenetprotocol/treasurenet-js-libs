import {hashMessage, hexMessage} from '../src';

describe('hash tests', () => {
  it('hashMessage', () => {
    let hash = hashMessage('test message')
    expect(hash).toBe('0x3e2d111c8c52a5ef0ba64fe4d85e32a5153032367ec44aaae0a4e2d1bfb9bebd')
  })

  it('hexMessage', () => {
    let hash = hexMessage('test message')
    expect(hash).toBe('0x74657374206d657373616765')
  })
})
