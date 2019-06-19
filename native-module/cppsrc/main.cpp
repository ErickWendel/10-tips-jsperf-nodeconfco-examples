/* cppsrc/main.cpp */
#include <napi.h>
#include "Samples/nodeconfAddon.h"
Napi::Object InitAll(Napi::Env env, Napi::Object exports) {
  return nodeconfAddon::Init(env, exports);
}


NODE_API_MODULE(nodeconfAddon, InitAll)